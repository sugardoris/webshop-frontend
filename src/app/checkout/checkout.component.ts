import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Listing } from '../model/listing';
import { CartService } from '../cart/cart.service';

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

  firstFormGroup = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    postalCode: new FormControl(''),
    country: new FormControl(''),
  });

  secondFormGroup = new FormGroup({
    cardHolder: new FormControl(''),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    cvc: new FormControl(''),
  });

  constructor(private cartService: CartService) {}

  ngOnInit() {
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
    this.cartService.clearCart();
  }
}
