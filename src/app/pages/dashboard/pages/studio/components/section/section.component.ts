import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CourseSection } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';
import { SectionFormComponent } from '../../dialogs/section-form/section-form.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {

  constructor(private courseService: CourseService, private dialog: NbDialogService) { }

  @Input()
  courseId: string;

  @Input()
  parent: CourseSection;

  @Input()
  current: CourseSection;

  children: Array<CourseSection>;

  ngOnInit(): void {
    this.children = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.courseService.getSectionsOfCourseByParent(this.courseId, this.current['id']).then((sections) => {
      this.children = sections as Array<CourseSection>
    })
  }

  add() {
    let diag = this.dialog.open(SectionFormComponent, {
      context: {
        courseId: this.courseId,
        parentName: this.current.name == undefined ? "Root" : this.current.name,
        parentId: this.current['id']
      }
    });

    diag.onClose.toPromise().then(() => {
      this.ngOnChanges(null);
    });
  }

  update() {
    console.log(this);
    console.log(this.parent['id']);
    let diag = this.dialog.open(SectionFormComponent, {
      context: {
        _id: this.current['id'],
        courseId: this.courseId,
        parentId: this.parent['id'],
        mode: "update",
        name: this.current.name,
        photoUrl: this.current.photo_url,
        content: this.current.content
      }
    });

    diag.onClose.toPromise().then(() => {
      this.ngOnChanges(null);
    });
  }

  delete() {
    this.courseService.deleteSectionOfCourse(this.courseId, this.current['id']).then(() => {
      this.ngOnChanges(null);
    }).catch((err) => {
      console.log(err);
    })
  }

}
