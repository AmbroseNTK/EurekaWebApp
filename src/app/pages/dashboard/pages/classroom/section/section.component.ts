import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseSection } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  sectionId = "";

  section: CourseSection = null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.sectionId = params['id'];
      this.section = this.courseService.currentSection;
    })
  }

}
