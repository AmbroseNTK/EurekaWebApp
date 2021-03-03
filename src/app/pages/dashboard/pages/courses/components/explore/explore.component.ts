import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  courses: Array<Course> = [];
  constructor(
    private courseService: CourseService,
  ) { }

  async ngOnInit() {
    this.onExplore();
  }

  onExplore() {
    this.courseService.getCourses().then((users) => {
      this.courses = users as Array<Course>;
    }).catch(error => console.log(error));
  }
}
