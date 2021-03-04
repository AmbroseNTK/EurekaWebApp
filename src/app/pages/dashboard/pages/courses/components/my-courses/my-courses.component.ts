import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  enrolledCourses: Array<Course> = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getEnrolledCourses();
  }

  getEnrolledCourses() {
    this.userService.getEnrolledCourses().then((value) => {
      console.log(value);
      this.enrolledCourses = value as Array<Course>;
    }).catch((e) => {
      console.log(e);
    })
  }
}
