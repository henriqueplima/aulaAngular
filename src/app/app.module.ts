import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {FilterPipe } from './pipes/filter.pipe';
import {SortPipe } from './pipes/sort.pipe';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/Header/Header.component';
import { LoadingComponent } from './components/Loading/Loading.component';
import { UserListPage } from './pages/UserList/UserList.page';
import { UserPage } from './pages/User/User.page';
import { LoginPage } from './pages/Login/Login.page';
import { SignupPage } from './pages/SignUp/Signup.page';
import { Error404Page } from './pages/Error404/Error404.page'

@NgModule({
  declarations: [
    SortPipe,
    FilterPipe,
    AppComponent,
    HeaderComponent,
    UserListPage,
    UserPage,
    LoginPage,
    SignupPage,
    Error404Page,
    LoadingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
