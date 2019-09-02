import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPage } from './pages/UserList/UserList.page';
import { UserPage } from './pages/User/User.page';
import { LoginPage } from './pages/Login/Login.page';
import { SignupPage } from './pages/SignUp/Signup.page';
import { Error404Page } from './pages/Error404/Error404.page';

const routes: Routes = [
  { path: '', component: LoginPage},
  { path: 'signup', component: SignupPage},
  { path: 'userList', component: UserListPage },
  { path: 'user', component: UserPage },
  { path: 'user/:id', component: UserPage },
  { path: '**', component: Error404Page }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
