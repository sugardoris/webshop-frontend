import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Listing } from '../../model/listing';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';
import { CartService } from '../../user-orders/cart/cart.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  @Input() listing?: Listing;
  inputAmount: number = 1;
  remainingAmount: number = 0;
  isAdmin: boolean = false;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
    if (this.isUserLoggedIn()) {
      this.checkIsUserAdmin();
    }
    this.getListing();
  }

  getListing() {
    const listingId = this.route.snapshot.paramMap.get('id');

    if (listingId !== null) {
      this.listingService.getListing(listingId).subscribe((listing) => {
        this.listing = listing;

        if (this.listing) {
          if (this.listing.inStock == 0) {
            this.remainingAmount = 0;
          }
          this.remainingAmount = this.listing?.inStock - this.listing?.inCart;
        }
      });
    } else {
      console.error('Listing ID cannot be null!');
    }
  }

  goBack() {
    this.location.back();
  }

  more() {
    if (this.remainingAmount != this.inputAmount) {
      this.inputAmount++;
    }
  }

  less() {
    if (this.inputAmount != 1) {
      this.inputAmount--;
    }
  }

  addToCart() {
    if (this.listing) {
      this.cartService.addToCart(this.listing, this.inputAmount, 0);
      this.remainingAmount -= this.inputAmount;
    }
  }

  isUserLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  getUser() {
    this.authService.getCurrentUser();
  }

  checkIsUserAdmin() {
    if (this.authService.currentUser?.role == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
