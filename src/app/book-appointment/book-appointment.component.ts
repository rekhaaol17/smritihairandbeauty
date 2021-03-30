import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'sm-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent implements OnInit {
  title: string;
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  form: FormGroup;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {}

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
        console.log(res);
        this.form.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onFormSubmit() {
    this.addAppointment();
    console.log('HERERE', this.form.value);
  }
}
