import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { Exams } from 'src/app/models/exams.model';
import { ExamService } from 'src/app/services/exam/exam.service';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent implements OnInit, OnChanges {

  constructor(private examService: ExamService, private toast: NbToastrService) { }


  ngOnInit(): void {
  }

  @Input()
  course: Course;

  exams: Array<Exams> = [];


  ngOnChanges(changes: SimpleChanges): void {
    //this.examService.getExams(this.course['id'],)
  }


}
