import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CookieService } from 'ngx-cookie';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';
import { ShowCourseComponent } from '../dialogs/show-course/show-course.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  courses: Array<Course> = [];
  constructor(
    private courseService: CourseService,
    private cookie: CookieService,
    private dialog: NbDialogService
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
  onShowCourseDetail(course: Course) {
    console.log(course);
    let dialog = this.dialog.open(ShowCourseComponent, {
      context: {
        course: course
      }, hasBackdrop: true,
      backdropClass: 'backdrop-blur',
      closeOnBackdropClick: false,
    });
  }
}
