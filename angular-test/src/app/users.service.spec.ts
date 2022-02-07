import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

import { of } from 'rxjs';
import { User } from './user';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
    // service = TestBed.inject(UsersService);
    usersService = TestBed.get(UsersService); //older way
  });

  it('userservice should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {
    it('should return a Array of users', () => {
      const userResponse : User[] = [
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
        }
        
      ];

      let response:User[]=[{
        'id': 1,
        'name': "Jane",
        'role': "Designer",
        'email': "jane@gmail.com"
      }];
      spyOn(usersService, "all").and.returnValue(of(userResponse));

      //mocked response of usersService
      usersService.all().subscribe(res=> {
        response=res;
      });

      expect(response).toEqual(userResponse);
    });
  });

});
