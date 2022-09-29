import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { User } from '../../model/user';
import { AuthService } from '../auth.service';
import { UserCredentials } from '../../model/userCredentials';
import { Router } from '@angular/router';
import { CartService } from '../../user-orders/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginMode: boolean = true;
  currentUser?: User;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.authService.errorEmitter.subscribe((error: string) => {
      this.errorMessage = error;
    });
  }

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
      let userCredentials: UserCredentials = {
        email: this.loginFormGroup.value.email,
        password: this.loginFormGroup.value.password,
      };

      this.authService.authenticate(userCredentials).subscribe(async (user) => {
        await localStorage.setItem('user', JSON.stringify(user));
        await this.authService.getCurrentUser();
        await console.log(this.authService.currentUser);
        if (this.authService.currentUser) {
          await this.cartService.moveToUserCart();
        }
        await this.router.navigateByUrl('/listings');
      });
    } else {
      let user: User = {
        id: 0,
        email: this.registerFormGroup.value.email,
        password: this.registerFormGroup.value.password,
        role: 'user',
      };

      this.authService.register(user).subscribe(async (user) => {
        await this.registerMode();
      });
    }
  }

  registerMode() {
    this.loginMode = !this.loginMode;

    this.loginFormGroup.patchValue({
      email: '',
      password: '',
    });

    this.loginFormGroup.markAsUntouched();
    this.loginFormGroup.markAsPristine();

    this.registerFormGroup.patchValue({
      email: '',
      password: '',
      repeatPassword: '',
    });

    this.registerFormGroup.markAsUntouched();
    this.registerFormGroup.markAsPristine();
  }
}
