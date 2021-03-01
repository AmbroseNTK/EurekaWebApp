import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from 'src/app/models/user_profile.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private idToken = null;

  public getIdToken() {
    return this.idToken;
  }
  public setIdToken(token: string) {
    this.idToken = token;
  }
  registerUser(user: UserAuth) {
    return this.http.post(`${environment.ENDPOINT}/auth/register`, {
      email: user.Email,
      password: user.Password
    }).toPromise();
  }
  loginUser(user: UserAuth) {
    return this.http.post(`${environment.ENDPOINT}/auth/login`, {
      email: user.Email,
      password: user.Password
    }).toPromise();
  }
}
