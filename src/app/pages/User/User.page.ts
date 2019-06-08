import { Component } from '@angular/core';

import { UsersService } from '../../services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './User.page.html',
  styleUrls: ['./User.page.css']
})
export class UserPage {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(''),
    phone: new FormControl(''),
  });

  private loading: boolean = false;
  private userId: string = '';
  private docId:String = "";

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) this.getUser(this.userId);
  }

  private getUser(id: String) {
    this.loading = true
    this.usersService.getById(id)
      .subscribe((data: any) => {
        const result = data[0].payload.doc.data();
        this.docId = data[0].payload.doc.id;
        console.log('id: '+this.docId);
        
        
        Object.keys(result).filter(item => item !== 'id').forEach((item) => {
          this.userForm.controls[item].setValue(result[item]);
          this.loading = false
        });

      })
  }

  onSubmit() {
    this.loading = true
    if (this.userId) {

      this.updateUser();
    } else {
      this.createUser()
    }
    
    
  }

  createUser(){
    console.log('criar novo')
    this.loading = true;
    
    this.usersService.create(this.userForm.value)
    .then(() => {
      this.loading = false
      this.router.navigate(["/"]);
    })
    .catch((error) => {
      this.loading = false
    });
  }

  updateUser() {
    
    this.loading = true;

    var user:Object = {
      id:this.userId,
      ...this.userForm.value
    }
    this.usersService.update(this.docId,user).then(() => {
      this.loading = false
      this.router.navigate(["/"]);
    }).catch((error) => {
      this.loading = false;
    });
  }


}
