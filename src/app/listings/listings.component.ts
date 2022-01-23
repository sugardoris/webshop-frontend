import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';
import { Listing } from '../model/listing';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [FilterPipe],
})
export class ListingsComponent implements OnInit {
  listings: Listing[] = [];
  filteredListings: Listing[] = [];
  isAdmin: boolean = false;

  constructor(
    private listingService: ListingService,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit(): void {
    this.checkIsUserAdmin();
    this.getListings();
  }

  getListings(): void {
    this.listings = this.listingService.getListings();
    this.filteredListings = this.listings;
  }

  filter(field: string) {
    this.filteredListings = this.filterPipe.transform(this.listings, field);
  }

  checkIsUserAdmin() {
    this.isAdmin = true;
  }
}
