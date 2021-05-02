import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthFirebaseService {

  constructor(
    private baseDatos: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  getAll() {
    return this.baseDatos.collection('usuarios').valueChanges();
  }
  login() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
