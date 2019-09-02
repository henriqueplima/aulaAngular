import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './Error404.page.html',
    styleUrls: ['./Error404.page.css']
})

export class Error404Page {
    constructor(
        private router: Router
    ){}
}