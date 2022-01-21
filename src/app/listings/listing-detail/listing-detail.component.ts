import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Listing } from '../../model/listing';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  @Input() listing?: Listing;
  inputAmount: number = 1;
  remainingAmount: number = 0;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getListing();
    if (this.listing) {
      if (this.listing.inStock == 0) {
        this.remainingAmount = 0;
      }
      this.remainingAmount = this.listing?.inStock - this.listing?.inCart;
      console.log(this.remainingAmount);
      console.log(this.listing.inCart);
    }
  }

  getListing() {
    const listingId = this.route.snapshot.paramMap.get('id');

    if (listingId !== null) {
      this.listing = this.listingService.getListing(listingId);
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
      this.cartService.addToCart(this.listing, this.inputAmount);
      this.remainingAmount -= this.inputAmount;
      console.log(this.remainingAmount);
      console.log(this.listing.inCart);
    }
  }
}
