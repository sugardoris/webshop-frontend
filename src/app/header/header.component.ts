import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../auth.service';
import { User } from '../model/user';

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
    this.cartService.getCartFromStorage();
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
  }
}
