import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getQuizOfCourse(courseId: string) {
    return this.http.get(`${environment.ENDPOINT}/courses/quiz`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }).toPromise();
  }
  createQuiz(courseId: string, quiz: Quiz) {
    return this.http.post(`${environment.ENDPOINT}/courses/quiz`, {
      id: quiz._id,
      ...quiz
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }, params: {
        course: courseId
      }
    }).toPromise();
  }
  updateQuiz(courseId: string, quiz: Quiz) {
    return this.http.put(`${environment.ENDPOINT}/courses/quiz`, {
      id: quiz._id,
      ...quiz
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }).toPromise();
  }
  deleteQuiz(courseId: string, quizId: string) {
    return this.http.delete(`${environment.ENDPOINT}/courses/quiz`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId,
        quiz: quizId
      }
    }).toPromise();
  }
}
