import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class UsersService {
    
    user: Observable<firebase.User>;

    constructor(
        private http: HttpClient,
        private db:AngularFirestore,
        private firebaseAuth: AngularFireAuth,
        private router: Router,
        ) {}

    getById(id:String) {
        return this.db.collection(
            'users', ref => ref.where('id', '==', id)
        ).snapshotChanges();
    }

    getAllUsers() {
        return this.db.collection('users').snapshotChanges();
    }

    create(data) {
        console.log(data);
        console.log(this.db);

        return this.db.collection('users').add({
            id: uuid(),
            ...data,
        });
    }

    update(id, data) {
        return this.db.collection('users').doc(id).set(data);
    }

    authenticate(email: string, password: string) {
        this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
            this.router.navigate(['/userList']);
        }).catch( error => {
            console.log(error)
        })
    }

    signup(email: string, password: string) {
        this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
            this.router.navigate(['']);
          })
          .catch(error => {
            console.error('Erro: ', error.message);
          });
      }

      isAuthenticated(): boolean {
          if (this.firebaseAuth.authState) {
            return true
          }

          return false
      }

      logout() {
        this.firebaseAuth.auth.signOut();
        this.router.navigate(['']);
      }

      delete(id) {
        this.db.collection('users', ref => ref.where('id', '==', id))
          .valueChanges({ idField: 'id' }).subscribe((data: any) => {
            const result = data[0];
            if  (result) {
              this.db.collection('users').doc(result.id).delete();
              console.log('Apaguei' + result.id);
              this.router.navigate(['/userList']);
            }
        });
      }
}