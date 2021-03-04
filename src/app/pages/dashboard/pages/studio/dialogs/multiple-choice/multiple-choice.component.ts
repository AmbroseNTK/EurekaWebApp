import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { MultipleChoices, SingleChoice } from 'src/app/models/multiple_choices.models';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {

  constructor(private ref: NbDialogRef<MultipleChoiceComponent>, private quizService: QuizService, private toast: NbToastrService) { }

  mode = 'create';

  @Input()
  public set quiz(q: Quiz) {
    this.multipleChoice = <MultipleChoices>JSON.parse(q.question)
  }

  @Input()
  public courseId;

  multipleChoice: MultipleChoices = {
    prompt: "",
    choices: []
  };

  ngOnInit(): void {
  }

  addChoice() {
    this.multipleChoice.choices.push({ id: "", content: "", mark: 0 });
  }

  removeChoice(i) {
    this.multipleChoice.choices.splice(i, 1);
  }

  create() {
    console.log(this.multipleChoice);
    this.quizService.createQuiz(this.courseId, {
      course_id: this.courseId,
      question: JSON.stringify(this.multipleChoice),
      type: "multiple_choices"
    }).then(() => {
      this.ref.close();
    }).catch((err) => {
      this.toast.danger(err.error.message, "Cannot create new quiz");
    })
  }

  update() {

  }

  close() {
    this.ref.close();
  }

}
