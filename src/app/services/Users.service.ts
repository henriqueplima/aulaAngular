import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { ObjectUnsubscribedError } from 'rxjs';

import uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(
        private http: HttpClient,
        private db:AngularFirestore
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

    
}