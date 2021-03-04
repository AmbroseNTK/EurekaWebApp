import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { MultipleChoiceComponent } from '../../dialogs/multiple-choice/multiple-choice.component';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss']
})
export class QuestionBankComponent implements OnInit {

  constructor(private dialog: NbDialogService) { }

  @Input()
  course: Course;

  ngOnInit(): void {
  }

  createMultipleChoice() {
    this.dialog.open(MultipleChoiceComponent, {
      context: {
        mode: 'create',
        courseId: this.course.id
      }
    });
  }

}
