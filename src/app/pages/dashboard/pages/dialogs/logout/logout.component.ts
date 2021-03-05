import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    public dialogRef: NbDialogRef<LogoutComponent>,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }
  onAccept() {
    this.cookie.removeAll();
    this.router.navigate(['login']);
  }
}
