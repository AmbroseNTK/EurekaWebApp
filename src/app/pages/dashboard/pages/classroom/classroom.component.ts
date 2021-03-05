import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Course, CourseSection } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private menuService: NbMenuService) { }

  courseId = "";
  course: Course = null;

  outline: Array<NbMenuItem> = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.courseId = params["id"];
      await this.loadCourse();
      await this.loadOutline();
    });
  }

  loadCourse() {
    return this.courseService.getCourseById(this.courseId).then((course) => {
      this.course = course as Course;
      console.log(this.course);
    })
  }

  buildOutlineTree(section: CourseSection, current: NbMenuItem) {
    if (current.data['id'] == section.parent) {
      if (current.children == undefined) {
        current.children = [];
      }
      current.children.push({
        title: section.name,
        data: section
      });
      return;
    }
    if (current.children == undefined) {
      return;
    }
    for (let i = 0; i < current.children.length; i++) {
      this.buildOutlineTree(section, current.children[i]);
    }
  }

  loadOutline() {
    return this.courseService.getSectionsOfCourse(this.courseId).then((outline) => {
      let sections = outline as Array<CourseSection>;
      let root: NbMenuItem = {
        title: 'Course outline',
        data: {
          id: ''
        }
      };
      for (let i = 0; i < sections.length; i++) {
        this.buildOutlineTree(sections[i], root);
      }
      this.menuService.addItems([root], 'outline');
    })
  }

}
