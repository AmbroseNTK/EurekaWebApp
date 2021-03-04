import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(public ref: NbDialogRef<CreateCourseComponent>, public course: CourseService, public toast: NbToastrService) { }

  id = "";
  name = "";
  fee = 0;
  allowEnroll = false;
  isPublic = false;
  startDate = "";
  photoUrl = "";

  idControl: FormControl;
  nameControl: FormControl;
  feeControl: FormControl;
  allowEnrollControl: FormControl;
  isPublicControl: FormControl;
  startDateControl: FormControl;
  photoUrlControl: FormControl;

  formGroup: FormGroup;

  ngOnInit(): void {
    this.idControl = new FormControl(this.id, [Validators.required, Validators.pattern(/[\s]*/)]);
    this.nameControl = new FormControl(this.name, [Validators.required]);
    this.feeControl = new FormControl(this.fee);
    this.allowEnrollControl = new FormControl(this.allowEnroll);
    this.isPublicControl = new FormControl(this.isPublic);
    this.startDateControl = new FormControl(this.startDate);
    this.photoUrlControl = new FormControl(this.photoUrl, [Validators.pattern(/()\:\/\/()/)]);

    this.formGroup = new FormGroup({
      "id": this.idControl,
      "name": this.nameControl,
      "fee": this.feeControl,
      "photoUrl": this.photoUrlControl
    })
  }

  async create() {
    try {
      await this.course.createCourse({
        id: this.idControl.value,
        name: this.nameControl.value,
        fee: this.feeControl.value,
        allow_enroll: this.allowEnrollControl.value,
        is_public: this.isPublicControl.value,
        photo_url: this.photoUrlControl.value,
        start_date: Date.parse(this.startDate),
        author_name: "Admin"
      });
      this.toast.success(`Created course [${this.idControl.value}]`, "Created course");
      this.ref.close();
    }
    catch (err) {
      console.log(err);
      this.toast.danger(`Cannot create [${this.idControl.value}]: ${err.error.message}`, "Failed to create new course");
    }
  }

  close() {
    this.ref.close();
  }

}
