import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { CoursesComponent } from '../../../courses.component';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.scss']
})
export class ShowCourseComponent implements OnInit {

  constructor(public dialogRef: NbDialogRef<ShowCourseComponent>) { }


  course: Course;
  maketingContent: string;
  ngOnInit(): void {
    this.maketingContent = this.course.marketing_content
  }

  close() {
    this.dialogRef.close();
  }
}
