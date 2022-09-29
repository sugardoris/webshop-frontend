import { Component, OnInit } from '@angular/core';
import { Listing } from '../../model/listing';
import { CartService } from '../cart.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Listing[] = [];
  total: number = 0;
  itemCount: number = 0;
  userId: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
    if (this.authService.currentUser) {
      this.isLoggedIn = true;
      this.getCartItems(this.isLoggedIn);
    } else {
      this.getCartItems(this.isLoggedIn);
    }
    this.getTotalPrice();
    this.getItemCount();
  }

  getCartItems(loggedIn: boolean) {
    this.cartService.getCartFromStorage(loggedIn);
    this.cartItems = this.cartService.cartItems;
  }

  getItemCount() {
    this.itemCount = this.cartService.itemCount;
  }

  getTotalPrice() {
    this.total = this.cartService.totalPrice;
  }

  less(itemId: number) {
    let index = this.cartItems.findIndex((item) => item.id == itemId);
    if (this.cartItems[index].inCart != 1) {
      let item = this.cartItems.find((item) => item.id == itemId);
      if (item) {
        this.cartService.addToCart(item, -1, this.userId);
      }
      this.getTotalPrice();
    }
  }

  more(itemId: number) {
    let index = this.cartItems.findIndex((item) => item.id == itemId);
    if (this.cartItems[index].inCart < this.cartItems[index].inStock) {
      let item = this.cartItems.find((item) => item.id == itemId);
      if (item) {
        this.cartService.addToCart(item, 1, this.userId);
      }
      this.getTotalPrice();
    }
  }

  removeItem(itemId: number) {
    let item = this.cartItems.find((item) => item.id == itemId);
    if (item) {
      this.itemCount -= item.inCart;
    }
    this.cartService.removeFromCart(itemId, this.userId);
    this.cartItems = this.cartItems.filter((item) => item.id != itemId);
    console.log('Cart item amount: ' + this.itemCount);
    this.getTotalPrice();
  }

  getUser() {
    this.authService.getCurrentUser();
  }
}
