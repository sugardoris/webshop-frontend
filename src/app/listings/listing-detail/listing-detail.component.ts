import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Listing } from '../../model/listing';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  @Input() listing?: Listing;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private listingService: ListingService
  ) {}

  ngOnInit(): void {
    this.getListing();
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
}
