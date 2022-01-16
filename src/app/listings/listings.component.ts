import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';
import { Listing } from '../model/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.getListings();
  }

  getListings(): void {
    this.listings = this.listingService.getListings();
  }
}
