import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Course, CourseSection } from 'src/app/models/course.model';
import { Exams } from 'src/app/models/exams.model';
import { CourseService } from 'src/app/services/course/course.service';
import { ExamService } from 'src/app/services/exam/exam.service';
import { DoExamComponent } from '../do-exam/do-exam.component';
import { TakeExamComponent } from '../take-exam/take-exam.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private toast: NbToastrService, private examService: ExamService, private dialog: NbDialogService) { }

  sectionId = "";

  section: CourseSection = null;
  course: Course = null;

  exams: Array<Exams> = null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.sectionId = params['id'];
      this.section = this.courseService.currentSection;
      //this.course = this.courseService.curr
      this.examService.getExams(this.courseService.currentCourseId, this.sectionId).then((exams) => {
        console.log(exams);
        this.exams = exams as Array<Exams>;
        console.log(this.exams);
      })
    });

  }

  openExam(exam: Exams) {
    let diag = this.dialog.open(TakeExamComponent, { context: { exam: exam }, backdropClass: 'backdrop-blur', closeOnBackdropClick: false });
    diag.onClose.subscribe((exam) => {
      if (exam == null) {
        return;
      }
      this.takeExam(exam);
    })
  }

  takeExam(exam: Exams) {
    this.examService.takeExam(this.courseService.currentCourseId, exam['id']).then((takenExam) => {
      console.log(takenExam);
      this.dialog.open(DoExamComponent, { context: { exam: exam, takenExams: takenExam, courseId: this.courseService.currentCourseId }, backdropClass: 'backdrop-blur', closeOnBackdropClick: false, closeOnEsc: false });
    }).catch((err) => {
      this.toast.danger(err.error.message, "Cannot take an exam");
    })
  }



}
