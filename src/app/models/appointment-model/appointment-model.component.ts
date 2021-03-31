import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { PinkToastService } from 'src/app/shared/services/toast.service';
@Component({
  selector: 'sm-appointment-model',
  templateUrl: './appointment-model.component.html',
  styleUrls: ['./appointment-model.component.scss'],
})
export class AppointmentModelComponent implements OnInit {
  title: string;
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  form: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private pinkToastService: PinkToastService
  ) {}

  ngOnInit(): void {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });

    this.form = this.fb.group({
      date: [new Date()],
      time: [new Date()],
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      message: [''],
    });
  }

  addAppointment() {
    this.firestore
      .collection('appointments')
      .add(this.form.value)
      .then((res) => {
        this.pinkToastService.openPinkToast('Appointment successfull!');
        this.form.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onFormSubmit() {
    this.addAppointment();
    console.log('HERERE', this.form.value);
    this.bsModalRef.hide();
  }
}
