import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseSection } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {

  constructor(private courseService: CourseService) { }


  @Input()
  parent: string;
  @Input()
  current: CourseSection

  children: Array<CourseSection>;

  ngOnInit(): void {
    this.children = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.courseService
  }

}
