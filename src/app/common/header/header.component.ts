import { Component, OnInit } from '@angular/core';
import { CartService } from '../../user-orders/cart.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser();
    if (this.authService.currentUser) {
      this.cartService.getCartFromStorage(this.authService.currentUser.id);
    } else {
      this.cartService.getCartFromStorage(0);
    }
  }

  get itemCount(): number {
    return this.cartService.itemCount;
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  navigatePinterest() {
    const url = 'https://www.pinterest.com/madewithlovecroatia';
    window.open(url, '_blank');
  }

  navigateInsta() {
    const url = 'https://www.instagram.com/mwlcroatia/';
    window.open(url, '_blank');
  }

  logout() {
    this.authService.logout();
    this.cartService.userLogout();
  }
}
