import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnChanges {

  constructor(private courseService: CourseService, private toast: NbToastrService) { }


  @Input()
  course: Course;

  nameControl: FormControl;
  feeControl: FormControl;
  allowEnrollControl: FormControl;
  isPublicControl: FormControl;
  photoUrlControl: FormControl;
  authorNameControl: FormControl;
  startDateControl: FormControl;

  startDate = new Date();
  marketingContent = "";

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.nameControl = new FormControl(this.course['name']);
    this.feeControl = new FormControl(this.course['fee']);
    this.allowEnrollControl = new FormControl(this.course['allow_enroll']);
    this.isPublicControl = new FormControl(this.course['is_public']);
    this.photoUrlControl = new FormControl(this.course['photo_url']);
    this.authorNameControl = new FormControl(this.course['author_name']);
    this.startDateControl = new FormControl(new Date(this.course['start_date']));
    this.marketingContent = this.course.marketing_content;
  }

  setStartDate(date) {
    this.startDate = date;
  }

  // setMarketingContent(content) {
  //   console.log(content);
  //   this.marketingContent = content.html;
  // }

  updateInfo() {
    this.courseService.updateCourse({
      id: this.course.id,
      name: this.nameControl.value,
      fee: this.feeControl.value,
      photo_url: this.photoUrlControl.value,
      allow_enroll: this.allowEnrollControl.value,
      is_public: this.isPublicControl.value,
      start_date: Date.parse(this.startDateControl.value),
      author_name: this.authorNameControl.value,
      marketing_content: this.marketingContent
    }).then(() => {
      this.toast.success("", "Updated");
    }).catch((err) => {
      this.toast.danger(err.error.message, "Failed to save");
    })
  }

  updateMarketingContent() {
    this.courseService.updateCourse({
      id: this.course.id,
      name: this.nameControl.value,
      fee: this.feeControl.value,
      photo_url: this.photoUrlControl.value,
      allow_enroll: this.allowEnrollControl.value,
      is_public: this.isPublicControl.value,
      start_date: Date.parse(this.startDateControl.value),
      author_name: this.authorNameControl.value,
      marketing_content: this.marketingContent

    }).then(() => {
      this.toast.success("", "Updated");
    }).catch((err) => {
      this.toast.danger(err.error.message, "Failed to save");
    })
  }

}
