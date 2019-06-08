import { Component } from '@angular/core';

import { UsersService } from '../../services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  templateUrl: './UserList.page.html',
  styleUrls: ['./UserList.page.css']
})
export class UserListPage {

  private usersList = new Array();

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private usersService: UsersService
  ) {}

  ngOnInit(){
    this.getUsers();
  }


  getUsers(){
      this.usersService.getAllUsers().subscribe((response: any) => {
        if (response) {
          for (let data of response){
           var user = data.payload.doc.data();
           this.usersList.push(user)
          }
          console.log(this.usersList);
        }
      });
  }

}



