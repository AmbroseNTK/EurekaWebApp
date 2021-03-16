import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CookieService } from 'ngx-cookie';
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
  rememberedMe = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: NbToastrService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
  }

  setCheckRememberMe(checked) {
    this.rememberedMe = checked;
  }

  async login() {
    console.log(this.username);
    console.log(this.password);
    this.user = { email: this.username, password: this.password };
    console.log(this.user);
    try {
      let token = (await this.authService.loginUser(this.user))["token"]
      this.authService.setIdToken(token.toString())
      console.log(this.rememberedMe)
      if (this.rememberedMe) {
        this.cookie.put("eureka-token", token.toString(), { sameSite: "lax" }) // expires: new Date(Date.now() + 30 * 60000)
      }
      this.toastService.success(`${this.user.email} login success`, 'Notification');
      this.router.navigate(['dashboard']);

    }
    catch (err) {
      console.log(err)
      this.toastService.danger("Login failed", "Login failed")
    }
  }
  async signup() {
    this.user = { email: this.username, password: this.password };
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
