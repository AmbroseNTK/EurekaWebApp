import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course, CourseSection } from 'src/app/models/course.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getCourses() {
    return this.http.get(`${environment.ENDPOINT}/courses`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  createCourse(course: Course) {
    return this.http.post(`${environment.ENDPOINT}/courses`, {
      id: course.Id,
      ...course
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  updateCourse(course: Course) {
    return this.http.put(`${environment.ENDPOINT}/courses`, {
      id: course.Id,
      ...course
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  deleteCourse(courseId: string) {
    return this.http.delete(`${environment.ENDPOINT}/courses`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        id: courseId
      }
    }).toPromise();
  }
  listingPublicCourse() {
    return this.http.get(`${environment.ENDPOINT}/courses/listing`).toPromise();
  }
  getCourseById(courseId: string) {
    return this.http.get(`${environment.ENDPOINT}/courses`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        id: courseId
      }
    }).toPromise();
  }

  // Section

  getSectionsOfCourse(courseId: string) {
    return this.http.get(`${environment.ENDPOINT}/courses/sections`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId
      }
    }).toPromise();
  }

  createSectionOfCourse(section: CourseSection) {
    return this.http.post(`${environment.ENDPOINT}/courses/sections`, {
      id: section.Id,
      ...section
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }

  deleteSectionOfCourse(courseId: string, sectionId: string) {
    return this.http.delete(`${environment.ENDPOINT}/courses/sections`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId,
        section: sectionId
      }
    }).toPromise();
  }

  updateSectionOfCourse(section: CourseSection) {
    return this.http.put(`${environment.ENDPOINT}/courses/sections`, {
      id: section.Id,
      ...section
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
}
