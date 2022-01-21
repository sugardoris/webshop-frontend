import { Injectable } from '@angular/core';
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Listing[] = [];

  constructor() {}

  addToCart(listing: Listing, amount: number) {
    let newItem = listing;
    let index = this.cartItems.findIndex((item) => item.id == listing.id);
    if (index != -1) {
      this.cartItems[index].inCart += amount;
    } else {
      newItem.inCart = amount;
      this.cartItems.push(newItem);
    }
  }

  removeFromCart(id: number) {
    let item = this.cartItems.find((item) => item.id == id);
    if (item) {
      item.inCart = 0;
    }
    this.cartItems = this.cartItems.filter((item) => item.id != id);
  }
}
