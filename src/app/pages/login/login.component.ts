import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth, UserProfile } from 'src/app/models/user_profile.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserAuth;
  flipped = false;
  username = null;
  password = null;
  displayName = null;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login() {
    console.log(this.username);
    console.log(this.password);
    this.user = { Email: this.username, Password: this.password };
    console.log(this.user);
    // await this.authService.loginUser(this.user).then((value) => {
    //   console.log(value);
    //   this.router.navigate(['dashboard']);
    // }).then((e) => {
    //   console.log(e);
    // })
  }
  async signup() {
    await this.authService.registerUser(this.user).then((value) => {
      console.log(value);
      this.toggleView();
    }).then((e) => {
      console.log(e);
    })
  }
  toggleView() {
    this.flipped = !this.flipped;
  }
}
