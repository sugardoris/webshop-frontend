import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../model/listing';
import { ListingService } from '../listings/listing.service';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.css'],
})
export class AddOrEditComponent implements OnInit {
  editMode: boolean = false;
  selected = 'Doilies';
  listing?: Listing;

  itemGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    materials: new FormControl('', Validators.required),
    height: new FormControl('', [Validators.required, Validators.min(0)]),
    width: new FormControl('', [Validators.required, Validators.min(0)]),
    depth: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService
  ) {}

  ngOnInit(): void {
    this.checkMode();
  }

  checkMode() {
    const mode = this.route.snapshot.params['mode'];
    this.editMode = mode == 'edit';
    if (this.editMode) {
      const id = this.route.snapshot.params['id'];
      this.getListingData(id);
    }
  }

  getListingData(id: string) {
    this.listing = this.listingService.getListing(id);
    this.selected = this.listing.category;
    this.itemGroup.patchValue({
      title: this.listing.title,
      category: this.listing.category,
      price: this.listing.price,
      amount: this.listing.inStock,
      imageUrl: this.listing.imageUrl,
      description: this.listing.info.description,
      materials: this.listing.info.materials,
      height: this.listing.info.height,
      width: this.listing.info.width,
      depth: this.listing.info.depth,
    });
  }
}
