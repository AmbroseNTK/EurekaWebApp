import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Course } from 'src/app/models/course.model';
import { MultipleChoices } from 'src/app/models/multiple_choices.models';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { MultipleChoiceComponent } from '../../dialogs/multiple-choice/multiple-choice.component';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss']
})
export class QuestionBankComponent implements OnInit, OnChanges {

  constructor(private dialog: NbDialogService, private quizService: QuizService, private toast: NbToastrService) { }


  @Input()
  course: Course;

  quizzes: Array<Quiz>

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.course == null) {
      return;
    }
    this.quizService.getQuizOfCourse(this.course.id).then((quizzes) => {
      this.quizzes = quizzes as Array<Quiz>;
      console.log(this.quizzes);
    });
  }

  createMultipleChoice() {
    let diag = this.dialog.open(MultipleChoiceComponent, {
      context: {
        mode: 'create',
        courseId: this.course.id
      }
    });

    diag.onClose.toPromise().then(() => {
      this.ngOnChanges(null);
    })
  }

  edit(quiz: Quiz) {
    switch (quiz.type) {
      case 'multiple_choices':
        let multipleChoices = JSON.parse(quiz.question) as MultipleChoices
        this.dialog.open(MultipleChoiceComponent, {
          context: {
            courseId: this.course.id,
            mode: 'update',
            multipleChoice: multipleChoices,
            quiz: quiz
          }
        });
    }
  }

  delete(quiz: Quiz) {
    this.quizService.deleteQuiz(this.course.id, quiz['id']).then(() => {
      this.ngOnChanges(null);
    }).catch((err) => {
      console.log(err);
      this.toast.danger(err.error, "Cannot delete quiz");
    })
  }

}
