import { Injectable } from '@angular/core';
import { Listing } from '../model/listing';
import { MockListings } from '../dummy-data/mock-listings';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  listings?: Listing[];
  listing?: Listing;
  constructor() {}

  getListings(): Listing[] {
    this.listings = MockListings;
    return this.listings;
  }

  getListing(id: string): Listing {
    this.listing = MockListings.find((listing) => listing.id.toString() == id);
    return <Listing>this.listing;
  }
}
