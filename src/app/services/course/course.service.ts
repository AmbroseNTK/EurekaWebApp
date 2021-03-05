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

  private _currentCourseId = "";

  public get currentCourseId(): string {
    return this._currentCourseId;
  }

  public set currentCourseId(courseId: string) {
    this._currentCourseId = courseId;
  }

  private _currentSection: CourseSection;

  public get currentSection() {
    return this._currentSection;
  }

  public set currentSection(section: CourseSection) {
    this._currentSection = section;
  }

  getCourses() {
    return this.http.get(`${environment.ENDPOINT}/courses/`, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  createCourse(course: Course) {
    return this.http.post(`${environment.ENDPOINT}/courses/`, {
      id: course.id,
      ...course
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  updateCourse(course: Course) {
    return this.http.put(`${environment.ENDPOINT}/courses/`, {
      id: course.id,
      ...course
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
  deleteCourse(courseId: string) {
    return this.http.delete(`${environment.ENDPOINT}/courses/`, {
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
    return this.http.get(`${environment.ENDPOINT}/courses/`, {
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

  getSectionsOfCourseByParent(courseId: string, parentId: string = "") {
    return this.http.get(`${environment.ENDPOINT}/courses/sections`, {
      headers: {
        Authorization: this.auth.getIdToken()
      },
      params: {
        course: courseId,
        parent: parentId
      }
    }).toPromise();
  }

  createSectionOfCourse(section: CourseSection) {
    return this.http.post(`${environment.ENDPOINT}/courses/sections`, {
      id: section._id,
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
      id: section._id,
      ...section
    }, {
      headers: {
        Authorization: this.auth.getIdToken()
      }
    }).toPromise();
  }
}
