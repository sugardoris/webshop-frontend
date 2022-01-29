import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';
import { Listing } from '../model/listing';
import { FilterPipe } from './filter.pipe';
import { MockListings } from '../dummy-data/mock-listings';
import { AuthService } from '../auth.service';
import { User } from '../model/user';

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
    private filterPipe: FilterPipe,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
    if (this.isUserLoggedIn()) {
      this.checkIsUserAdmin();
    }
    this.getListings();
  }

  getListings() {
    this.listingService.getListings().subscribe((listings) => {
      this.listings = listings;
      this.filteredListings = this.listings;
    });
  }

  filter(field: string) {
    this.filteredListings = this.filterPipe.transform(this.listings, field);
  }

  removeFilter() {
    this.filteredListings = this.listings;
  }

  delete(listing: Listing): void {
    this.listings = this.listings?.filter((l) => l !== listing);
    this.filteredListings = this.listings;
    this.listingService.deleteListing(listing.id.toString()).subscribe();
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
