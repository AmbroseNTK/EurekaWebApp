import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  courseId = "";
  course: Course = null;

  outline: Array<NbMenuItem> = [
    { title: "Root" },
    { title: "Child" }
  ];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.courseId = params["id"];
      await this.loadCourse();

    });
  }

  loadCourse() {
    return this.courseService.getCourseById(this.courseId).then((course) => {
      this.course = course as Course;
      console.log(this.course);
    })
  }

  loadOutline() {

  }

}
