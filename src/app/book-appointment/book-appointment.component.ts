import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';

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
  availableServices: Array<any> = [
    { name: 'braidsAndTwist', value: 'Braids & Twist' },
    { name: 'hairColor', value: 'Hair Color' },
    { name: 'hairExtension', value: 'Hair Extension' },
    { name: 'correctiveColor', value: 'Corrective Color' },
    { name: 'hairCut', value: 'Hair Cut' },
    { name: 'partialFoil', value: 'Partial Foil' },
    { name: 'expensionPerTrack', value: 'Extension Per Track' },
  ];

  constructor(
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
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
      services: this.fb.array([]),
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('services') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  addAppointment() {
    this.firestore
      .collection('appointments')
      .add(this.form.value)
      .then((res) => {
        this.toastr.success('Appointment successfull!');
        this.form.reset();
        this.router.navigateByUrl('/');
      })
      .catch((e) => {
        console.log('Appointment Error ', e);
      });
  }

  onFormSubmit() {
    this.addAppointment();
    console.log('HERERE', this.form.value);
  }
}
