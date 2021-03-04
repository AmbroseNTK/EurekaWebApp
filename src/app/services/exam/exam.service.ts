import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exams, SubmittedExams } from 'src/app/models/exams.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getExams(courseId: string, sectionId: string) {
    return this.http.get(`${environment.ENDPOINT}/exams`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId,
        section: sectionId
      }
    }).toPromise();
  }
  getSubmittedExam(examId: string) {
    return this.http.get(`${environment.ENDPOINT}/exams/submission`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        exam: examId,
      }
    }).toPromise();
  }
  getTakenExam() {
    return this.http.get(`${environment.ENDPOINT}/exams/taken-exams`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  takeExam(courseId: string, examId: string) {
    return this.http.get(`${environment.ENDPOINT}/exams/taken`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId,
        exam: examId
      }
    }).toPromise();
  }
  previewExam(courseId: string, examId: string) {
    return this.http.get(`${environment.ENDPOINT}/exams/preview`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId,
        exam: examId
      }
    }).toPromise();
  }
  createExam(courseId: string, exam: Exams) {
    return this.http.post(`${environment.ENDPOINT}/exams/`, {
      ...exam
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }
    ).toPromise();
  }
  submitExam(courseId: string, submitExam: SubmittedExams) {
    return this.http.post(`${environment.ENDPOINT}/exams/submit`, {
      ...submitExam
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }
    ).toPromise();
  }
  updateExam(courseId: string, updateExam: Exams) {
    return this.http.put(`${environment.ENDPOINT}/exams/`, {
      ...updateExam
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }
    ).toPromise();
  }
  deleteExam(courseId: string, examId: string) {
    return this.http.delete(`${environment.ENDPOINT}/exams/`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId,
        exam: examId
      }
    }
    ).toPromise();
  }
}
