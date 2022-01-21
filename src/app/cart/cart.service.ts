import { Injectable } from '@angular/core';
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Listing[] = [];
  cartItemAmount: number = 0;

  constructor() {}

  addToCart(listing: Listing, amount: number) {
    let newItem = listing;
    let index = this.cartItems.findIndex((item) => item.id == listing.id);
    if (index != -1) {
      this.cartItems[index].inCart += amount;
      this.cartItemAmount += amount;
    } else {
      newItem.inCart = amount;
      this.cartItems.push(newItem);
      this.cartItemAmount += amount;
    }
  }

  removeFromCart(id: number) {
    let item = this.cartItems.find((item) => item.id == id);
    if (item) {
      this.cartItemAmount -= item.inCart;
      item.inCart = 0;
    }
    this.cartItems = this.cartItems.filter((item) => item.id != id);
  }
}
