import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/Users.service';

@Component({
    templateUrl: './Signup.page.html',
    styleUrls: ['./Signup.page.css']
})

export class SignupPage {
    constructor(
        private usersService: UsersService,
        private router: Router
    ){}


    // ngOnInit() {
    //     if (this.authService.isLogged) {
    //       this.router.navigate(['/userlist']);
    //     }
    //   }

    createUser(email: string, password: string) {
        this.usersService.signup(email, password);
    }

}