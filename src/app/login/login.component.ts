import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submittedLogin: boolean = false;
  submitterRegister: boolean = false;
  loginMode: boolean = true;

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  get email() {
    return this.loginFormGroup.get('email');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  matchPasswordValidator(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = control.parent?.get(matchTo);
      return control.value === pass?.value ? null : { notSame: true };
    };
  }

  registerFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', [
      Validators.required,
      this.matchPasswordValidator('password'),
    ]),
  });

  get registerEmail() {
    return this.registerFormGroup.get('email');
  }

  get registerPassword() {
    return this.registerFormGroup.get('password');
  }

  get repeatPassword() {
    return this.registerFormGroup.get('repeatPassword');
  }

  onSubmit(): void {
    if (this.loginMode) {
      this.submittedLogin = true;
      let user = {
        email: this.loginFormGroup.value.email,
        password: this.loginFormGroup.value.password,
      };
      console.log(user);
    } else {
      this.submitterRegister = true;
      let user = {
        email: this.registerFormGroup.value.email,
        password: this.registerFormGroup.value.password,
        role: 'user',
      };
      console.log(user);
    }
  }

  registerMode() {
    this.loginMode = !this.loginMode;
  }

  onRegister() {
    console.log(this.registerFormGroup.value);
  }
}
