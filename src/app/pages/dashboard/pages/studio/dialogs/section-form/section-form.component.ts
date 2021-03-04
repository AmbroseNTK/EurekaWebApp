import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.scss']
})
export class SectionFormComponent implements OnInit {

  constructor(private ref: NbDialogRef<SectionFormComponent>, private courseService: CourseService, private toast: NbToastrService) { }

  content = "";
  parentName = "";
  parentId = "";
  courseId = "";
  name = "";
  photoUrl = "";
  editContent = "";
  _id = "";

  mode = "create";

  nameControl: FormControl;
  photoUrlControl: FormControl;

  ngOnInit(): void {
    this.nameControl = new FormControl(this.name);
    this.photoUrlControl = new FormControl(this.photoUrl);
  }

  setContent(content) {
    this.editContent = content.html;
  }

  create() {
    this.courseService.createSectionOfCourse({
      course_id: this.courseId,
      parent: this.parentId,
      name: this.nameControl.value,
      content: this.editContent,
      photo_url: this.photoUrlControl.value
    }).then(() => {
      this.close();
    }).catch((err) => {
      this.toast.danger(err.error.message, "Cannot create new section");
    })
  }

  update() {
    this.courseService.updateSectionOfCourse({
      _id: this._id,
      course_id: this.courseId,
      parent: this.parentId,
      name: this.nameControl.value,
      content: this.editContent,
      photo_url: this.photoUrlControl.value
    }).then(() => {
      this.close();
    }).catch((err) => {
      this.toast.danger(err.error.message, "Cannot update section");
    })
  }

  close() {
    this.ref.close();
  }

}
