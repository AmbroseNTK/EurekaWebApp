import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public dialogRef: NbDialogRef<ProfileComponent>,
  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
  }
}
