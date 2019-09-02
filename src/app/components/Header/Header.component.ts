import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/Users.service';

@Component({
  selector: 'header-component',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent {

  constructor(
    private usersService: UsersService,
    private router: Router
  ){}

  exit() {
    console.log('chamou sair');
    this.usersService.logout();
  }

  back() {
    console.log('chamou voltar');
    this.router.navigate(['/']);
  }
      
}
