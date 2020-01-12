import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthFirebaseService {
  private user: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  } 

  signUpWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
  }

  signInWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }
}
