import { Component } from '@angular/core';

import { UsersService } from '../../services/Users.service';

@Component({
  templateUrl: './User.page.html',
  styleUrls: ['./User.page.css']
})
export class UserPage {
  constructor(
    private usersService: UsersService
  ) {}

  private loading: boolean = false

  createUser(){
    this.loading = true;
    
    this.usersService.create({
      name: 'henrique',
      email: 'h.h@gmail.com',
      age: '30',
      phone: '558448884'
    })
    .then(() => this.loading = false)
    .catch((error) => {
      this.loading = false
    });
  }
}
