import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    this.appointments$ = collectionRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c: any) => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data(),
        }))
      )
    );
  }

  ngOnInit(): void {}

  deleteAppointment(id) {
    if (confirm('Delete?')) {
      this.firestore.collection('appointments').doc(id).delete();
    }
  }
}
