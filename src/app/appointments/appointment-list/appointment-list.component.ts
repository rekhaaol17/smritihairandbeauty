import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'sm-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  appointments$: Observable<any>;
  id: any;
  constructor(private firestore: AngularFirestore) {
    const collectionRef = this.firestore.collection('appointments');
    const collectionInstance = collectionRef.valueChanges();
    this.appointments$ = collectionInstance;

    collectionRef.snapshotChanges().forEach((changes) => {
      changes.map((a) => {
        this.id = a.payload.doc.id;
      });
    });
  }

  ngOnInit(): void {}

  deleteAppointment() {
    if (confirm('Delete?')) {
      this.firestore.collection('appointments').doc(this.id).delete();
      // this.edit = false;
      // this.single = null;
    }
  }
}
