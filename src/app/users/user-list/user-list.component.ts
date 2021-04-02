import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'sm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<any>;
  constructor() {}

  ngOnInit(): void {
    const users = [
      {
        name: 'Hemant',
        email: 'hemant@gmail.com',
        phoneNumber: 7799119111,
      },
      {
        name: 'Rekha',
        email: 'rekha@gmail.com',
        phoneNumber: 5435843754,
      },
      {
        name: 'Arya',
        email: 'arya@gmail.com',
        phoneNumber: 9493483844,
      },
    ];

    this.users$ = of(users);
  }

  deleteUser(user) {
    console.log('delete', user);
  }
}
