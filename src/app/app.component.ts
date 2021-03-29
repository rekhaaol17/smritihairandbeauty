import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smritiHairAndBeauty';
  items: Observable<any[]>;
  myArray = [];
  constructor(private firestore: AngularFirestore) {
    const collectionRef = this.firestore.collection('testCollection');
    const collectionInstance = collectionRef.valueChanges();
    collectionInstance.subscribe((ss) => (this.myArray = ss));

    // this.firestore
    //   .collection('testCollection')
    //   .get()
    //   .subscribe((ss) => {
    //     // console.log('hshs', [...ss.docs]);
    //     ss.docs.forEach((doc) => {
    //       this.myArray.push(doc.data());
    //     });

    //     console.log(this.myArray);
    //   });
  }

  form = new FormGroup({
    newValue: new FormControl(''),
  });

  onSubmit() {
    this.firestore
      .collection('testCollection')
      .add({
        field: this.form.value.newValue,
      })
      .then((res) => {
        console.log(res);
        this.form.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getOne() {
    this.firestore
      .collection('testCollection', (ref) => ref.where('field', '==', 'paspa'))
      .get()
      .subscribe((ss) => {
        if (ss.docs.length === 0) {
          console.log('Document not found! Try again!');
        } else {
          ss.docs.forEach((doc) => {
            console.log('Got', doc.data());
          });
        }
      });
  }
}
