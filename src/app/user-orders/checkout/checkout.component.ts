import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Listing } from '../../model/listing';
import { CartService } from '../cart.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CheckoutComponent implements OnInit {
  cartItems: Listing[] = [];
  total: number = 0;
  startDate = new Date(2023, 0, 1);

  firstFormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });

  secondFormGroup = new FormGroup({
    cardHolder: new FormControl('', Validators.required),
    cardNumber: new FormControl('', [
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new FormControl('', Validators.required),
    cvc: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.min(100),
      Validators.max(999),
    ]),
  });

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUser();
    if (!this.isUserLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
    this.getListings();
    this.getTotalPrice();
  }

  getListings() {
    this.cartItems = this.cartService.cartItems;
  }

  getTotalPrice() {
    this.total = this.cartService.totalPrice;
  }

  clearCart() {
    if (this.authService.currentUser) {
      this.cartService.clearCart();
    }
  }

  isUserLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  getUser() {
    this.authService.getCurrentUser();
  }
}
