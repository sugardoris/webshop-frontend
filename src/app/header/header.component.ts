import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartFromStorage();
  }

  get itemCount(): number {
    return this.cartService.itemCount;
  }

  navigatePinterest() {
    const url = 'https://www.pinterest.com/madewithlovecroatia';
    window.open(url, '_blank');
  }

  navigateInsta() {
    const url = 'https://www.instagram.com/mwlcroatia/';
    window.open(url, '_blank');
  }
}
