import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { interval } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators'
import { Exams, SubmittedExams, TakenExams } from 'src/app/models/exams.model';
import { MultipleChoices } from 'src/app/models/multiple_choices.models';
import { Quiz } from 'src/app/models/quiz.model';
import { ExamService } from 'src/app/services/exam/exam.service';

@Component({
  templateUrl: './do-exam.component.html',
  styleUrls: ['./do-exam.component.scss']
})
export class DoExamComponent implements OnInit {

  constructor(private ref: NbDialogRef<DoExamComponent>, private examService: ExamService, private toast: NbToastrService) { }

  exam: Exams;

  takenExams: TakenExams;

  courseId = "";

  elapsedTimePercent = 0;
  remainingMinutes = 0;
  remainingSeconds = 0;

  parsedQuiz = [];

  submission: SubmittedExams = null;

  finished = false;
  submitted = false;

  ngOnInit(): void {
    this.parsedQuiz = [];
    let interval = setInterval(() => {
      let elapsedTime = Date.now() - this.takenExams.createddate * 1000;
      this.elapsedTimePercent = Math.round(elapsedTime / this.takenExams.duration * 100)
      let elapsedDate = new Date(this.takenExams.duration - elapsedTime);
      this.remainingMinutes = elapsedDate.getMinutes();
      this.remainingSeconds = elapsedDate.getSeconds();
      if (elapsedTime > this.takenExams.duration) {
        clearInterval(interval);
        this.remainingMinutes = 0;
        this.remainingSeconds = 0;
        this.submit();
      }
    }, 500);

    for (let i = 0; i < this.takenExams.quizzes.length; i++) {
      if (this.takenExams.quizzes[i].type == 'multiple_choices') {
        this.parsedQuiz.push(this.getMultipleChoice(this.takenExams.quizzes[i]));
      }
      else {
        this.parsedQuiz.push(this.takenExams.quizzes[i]);
      }
    }
    console.log(this.parsedQuiz);
  }

  getMultipleChoice(quiz: Quiz): MultipleChoices {
    return JSON.parse(quiz.question) as MultipleChoices;
  }

  submit() {
    if (this.submitted) {
      return;
    }
    console.log(this.takenExams);
    this.examService.submitExam(this.courseId, this.takenExams).then(() => {
      this.toast.success("", "Finish the test");
      this.finished = true;
      this.submitted = true;
    }).catch((err) => {
      this.toast.danger(err.error.message, "Cannot submit the test");
    });
  }

  viewResult() {
    this.examService.getSubmittedExam(this.takenExams['id']).then((submission) => {
      this.submission = submission as SubmittedExams;
    }).catch((err) => {
      this.toast.danger(err.error.message, "Cannot get the result");
    })
  }

  close() {
    this.ref.close();
  }

}
