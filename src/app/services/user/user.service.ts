import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdatedUserProfile, UserProfile } from 'src/app/models/user_profile.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getEmailOfUser() {
    return this.http.get(`${environment.ENDPOINT}/users`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  getAccountOfUser() {
    return this.http.get(`${environment.ENDPOINT}/users/account`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  getTransactionsOfUser() {
    return this.http.get(`${environment.ENDPOINT}/users/transactions`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  createUserProfile(user: UserProfile) {
    return this.http.post(`${environment.ENDPOINT}/users`, {
      email: user.Email,
      display_name: user.DisplayName,
      phone_number: user.PhoneNumber,
      gender: user.Gender,
      dob: user.DOB,
      role: user.Role
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  updateUserProfile(user: UpdatedUserProfile) {
    return this.http.put(`${environment.ENDPOINT}/users`, {
      display_name: user.DisplayName,
      phone_number: user.PhoneNumber,
      role: user.Role
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  deleteUser() {
    return this.http.delete(`${environment.ENDPOINT}/users`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
}
