import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';
import { CreateCourseComponent } from './dialogs/create-course/create-course.component';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  constructor(private courseService: CourseService, private dialog: NbDialogService) { }

  public courses: Array<Course>;
  public selectedCourse: Course = null;
  currentTab = 'Your course'
  ngOnInit(): void {
    this.courses = [];
    this.loadCourses();
  }

  public loadCourses() {
    this.courseService.getCourses().then((courses) => {
      this.courses = courses as Array<Course>;
      console.log(this.courses)
    })
  }

  public openCreateDialog() {
    let diag = this.dialog.open(CreateCourseComponent);
    diag.onClose.toPromise().then(() => {
      this.loadCourses();
    });
  }

  public selectCourse(course) {
    console.log(course as Course);
    this.selectedCourse = <Course>course;
    this.currentTab = 'Course Editor';
  }

}
