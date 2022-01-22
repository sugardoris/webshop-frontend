import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Listing } from '../model/listing';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Listing[] = [];
  total: number = 0;
  itemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getListings();
    this.getTotalPrice();
    this.getItemCount();
  }

  getListings() {
    this.cartItems = this.cartService.cartItems;
  }

  getItemCount() {
    this.itemCount = this.cartService.itemCount;
  }

  getTotalPrice() {
    this.total = this.cartService.totalPrice;
  }

  less(itemId: number) {
    // let index = this.cartItems.findIndex((item) => item.id == itemId);
    // if (this.cartItems[index].inCart != 1) {
    //   this.cartItems[index].inCart--;
    //   this.itemCount--;
    //   console.log('Cart item amount: ' + this.itemCount);
    //   this.total -= this.cartItems[index].price;
    // }
    let index = this.cartItems.findIndex((item) => item.id == itemId);
    if (this.cartItems[index].inCart != 1) {
      let item = this.cartItems.find((item) => item.id == itemId);
      if (item) {
        this.cartService.addToCart(item, -1);
      }
      this.getTotalPrice();
    }
  }

  more(itemId: number) {
    // let index = this.cartItems.findIndex((item) => item.id == itemId);
    // if (this.cartItems[index].inCart < this.cartItems[index].inStock) {
    //   this.cartItems[index].inCart++;
    //   this.itemCount++;
    //   console.log('Cart item amount: ' + this.itemCount);
    //   this.total += this.cartItems[index].price;
    // }
    let index = this.cartItems.findIndex((item) => item.id == itemId);
    if (this.cartItems[index].inCart < this.cartItems[index].inStock) {
      let item = this.cartItems.find((item) => item.id == itemId);
      if (item) {
        this.cartService.addToCart(item, 1);
      }
      this.getTotalPrice();
    }
  }

  removeItem(itemId: number) {
    let item = this.cartItems.find((item) => item.id == itemId);
    if (item) {
      this.itemCount -= item.inCart;
    }
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartItems.filter((item) => item.id != itemId);
    console.log('Cart item amount: ' + this.itemCount);
    this.getTotalPrice();
  }
}
