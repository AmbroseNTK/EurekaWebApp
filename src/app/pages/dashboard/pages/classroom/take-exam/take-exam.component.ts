import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Exams } from 'src/app/models/exams.model';

@Component({
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.scss']
})
export class TakeExamComponent implements OnInit {

  constructor(private dialogRef: NbDialogRef<TakeExamComponent>, private toast: NbToastrService) { }

  exam: Exams;

  ngOnInit(): void {
  }

  take() {
    this.dialogRef.close(this.exam);
  }

  close() {
    this.dialogRef.close(null);
  }

}
