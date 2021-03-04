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
    return this.http.get(`${environment.ENDPOINT}/courses/quiz/`, {
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
      course_id: quiz.course_id,
      question: quiz.question,
      answer: quiz.answer,
      correctanswer: quiz.correctanswer,
      type: quiz.type,
      last_update: quiz.last_update
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
}
