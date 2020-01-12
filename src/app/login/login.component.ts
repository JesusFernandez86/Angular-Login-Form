import { Component, OnInit } from "@angular/core";
import { AuthFirebaseService } from "../providers/auth/auth-firebase.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface IForm {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  notLogged: boolean = true;
  form: FormGroup;

  constructor(public AuthFirebaseService: AuthFirebaseService) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  SignUp(value: IForm) {
    if (this.notLogged) {
      const result = this.AuthFirebaseService.signUpWithEmail(
        value.email,
        value.password
      );
      console.log(`new account ${this.form.value.email} created `);
    } else {
      const result = this.AuthFirebaseService.signInWithEmail(
        value.email,
        value.password
      );
      console.log("signed in!");
    }
  }
}
