import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/Users.service';

@Component({
    templateUrl: './Login.page.html',
    styleUrls: ['./Login.page.css']
})

export class LoginPage {
    constructor(
        private usersService: UsersService,
        private router: Router
    ){}

    doAuthetication(email: string, password: string) {
        this.usersService.authenticate(email, password)
    }

    routeSignUp() {
        this.router.navigate(['/signup'])
    }
}