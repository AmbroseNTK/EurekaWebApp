import { Component, Input, OnInit, Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { EnrollmentService } from 'src/app/services/enrollment/enrollment.service';
import { MiscService } from 'src/app/services/misc/misc.service';
import { CoursesComponent } from '../../../courses.component';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.scss']
})
export class ShowCourseComponent implements OnInit {

  constructor(public dialogRef: NbDialogRef<ShowCourseComponent>,
    private enrollService: EnrollmentService,
    private toastService: NbToastrService,
    public miscService: MiscService,
    private sanitizer: DomSanitizer
  ) { }


  course: Course;
  maketingContent: any;

  ngOnInit(): void {
    this.maketingContent = this.sanitizer.bypassSecurityTrustHtml(this.course.marketing_content)
  }

  close() {
    this.dialogRef.close();
  }
  onEnroll(courseId: string) {
    this.enrollService.enrollCourse(courseId).then(() => {
      this.toastService.success(`Enrolled [${courseId}] successfully`, "Enrolled course");
    }).catch((e) => {
      this.toastService.danger("", e.error.message);
    })
  }
}
