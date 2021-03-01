import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getCourseEnrolled(courseId: string) {
    return this.http.get(`${environment.ENDPOINT}/courses/enrollment`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }).toPromise();
  }
  enrollCourse(courseId: string) {
    return this.http.post(`${environment.ENDPOINT}/users/enroll`, '', {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }).toPromise();
  }
}
