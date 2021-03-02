import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getExam(courseId: string, sectionId: string) {

  }
}
