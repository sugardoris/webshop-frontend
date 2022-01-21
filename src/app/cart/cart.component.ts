import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getListings();
    this.calculateTotal();
  }

  getListings() {
    this.cartItems = this.cartService.cartItems;
  }

  calculateTotal() {
    for (let item of this.cartItems) {
      this.total += item.price;
    }
  }

  less(itemId: number) {
    let index = this.cartItems.findIndex((item) => item.id == itemId);
    if (this.cartItems[index].inCart != 1) {
      this.cartItems[index].inCart--;
    }
  }

  more(itemId: number) {
    let index = this.cartItems.findIndex((item) => item.id == itemId);
    if (this.cartItems[index].inCart < this.cartItems[index].inStock) {
      this.cartItems[index].inCart++;
    }
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartItems.filter((item) => item.id != itemId);
  }
}
