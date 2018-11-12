import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

loginFacebook(){
  return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
}

registerUser(email: string, pass: string){
  return new Promise((resolve, reject)=>{
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, pass)
    .then( userData => resolve(userData),
    err => reject (err));
  });
}

registerEmail(email: string, pass: string){
  return new Promise((resolve, reject)=>{
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, pass)
    .then( userData => resolve(userData),
    err => reject (err));
  });
}

getAuth(){
  return this.afAuth.authState.map(auth => auth)
}

logout(){
  return this.afAuth.auth.signOut();
}
}