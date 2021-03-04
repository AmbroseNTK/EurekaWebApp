import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
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
    private cookie: CookieService
  ) { }

  async ngOnInit() {
    await this.onExplore();
  }

  onExplore() {
    this.courseService.listingPublicCourse().then((course) => {
      console.log(course);
      this.courses = course as Array<Course>;
    }).catch(error => console.log(error));
  }
}
