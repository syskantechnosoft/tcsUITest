import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:User[];

  constructor(private userservice:UsersService) {
    this.users = [{
      'id': 1,
      'name': "Jane",
      'role': "Designer",
      'email': "jane@gmail.com"
    }];
   }

  ngOnInit(): void {
    this.userservice.all().subscribe(res=> {
      this.users = res;
    });
  }

}
