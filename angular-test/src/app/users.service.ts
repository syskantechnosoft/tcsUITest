import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // user:User;
  users : User[] = [
    {
      'id': 1,
      'name': "Jane",
      'role': "Designer",
      'email': "jane@gmail.com"
    },
    {
      'id': 2,
      'name': "Bob",
      'role': "Developer",
      'email': "bob@gmail.com"
    },
    {
      'id': 3,
      'name': "Jim",
      'role': "Designer",
      'email': "jim@gmail.com"
    },
    {
      'id': 4,
      'name': "Adam",
      'role': "Developer",
      'email': "adam@gmail.com"
    }
  ];

  constructor() { }


  all(): Observable<User[]> {
    return of(this.users);
  }


  findOne(id:number):Observable<User> {
   const  user !:User = this.users.find((u:User)=> {
      return u.id === id;
    });
    return of(user);
  }
}


