import { Injectable } from '@angular/core';
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Listing[] = [];
  itemCount: number = 0;
  totalPrice: number = 0;

  constructor() {}

  addToCart(listing: Listing, amount: number, userId: number) {
    let newItem = listing;
    let index = this.cartItems.findIndex((item) => item.id == listing.id);
    if (index != -1) {
      this.cartItems[index].inCart += amount;
      this.itemCount += amount;
      console.log('Cart item amount: ' + this.itemCount);
      this.calculateTotal();
    } else {
      newItem.inCart = amount;
      this.cartItems.push(newItem);
      this.itemCount += amount;
      console.log('Cart item amount: ' + this.itemCount);
      this.calculateTotal();
    }

    if (userId != 0) {
      localStorage.setItem(userId.toString(), JSON.stringify(this.cartItems));
    } else {
      localStorage.setItem('anonymous', JSON.stringify(this.cartItems));
    }
  }

  removeFromCart(id: number, userId: number) {
    let item = this.cartItems.find((item) => item.id == id);
    if (item) {
      this.itemCount -= item.inCart;
      item.inCart = 0;
    }
    this.cartItems = this.cartItems.filter((item) => item.id != id);
    console.log('Cart item amount: ' + this.itemCount);
    this.calculateTotal();

    if (userId != 0) {
      localStorage.setItem(userId.toString(), JSON.stringify(this.cartItems));
    } else {
      localStorage.setItem('anonymous', JSON.stringify(this.cartItems));
    }
  }

  calculateTotal(): number {
    this.totalPrice = 0;
    for (let item of this.cartItems) {
      if (item.inCart > 1) {
        let price = item.price * item.inCart;
        this.totalPrice += price;
      } else {
        this.totalPrice += item.price;
      }
    }
    return this.totalPrice;
  }

  getCount(): number {
    this.itemCount = 0;
    for (let item of this.cartItems) {
      this.itemCount += item.inCart;
    }
    return this.itemCount;
  }

  clearCart(userId: number) {
    this.cartItems = [];
    this.itemCount = 0;
    this.totalPrice = 0;
    localStorage.setItem(userId.toString(), JSON.stringify(this.cartItems));
    localStorage.setItem('anonymous', JSON.stringify(this.cartItems));
  }

  getCartFromStorage() {
    let cart = localStorage.getItem('anonymous');
    if (cart) {
      this.cartItems = JSON.parse(cart);
      this.getCount();
      this.calculateTotal();
    }
  }

  moveToUserCart(userId: number) {
    localStorage.setItem(userId.toString(), JSON.stringify(this.cartItems));
  }
}
