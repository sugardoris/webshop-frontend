import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitted: boolean = false;

  loginFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  get username() {
    return this.loginFormGroup.get('username');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
