import { Injectable } from '@angular/core';
import { Listing } from './model/listing';
import { MockListings } from './dummy-data/mock-listings';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor() {}

  getListings(): Listing[] {
    return MockListings;
  }
}
