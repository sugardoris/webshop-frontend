import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../model/listing';
import { ListingService } from '../../listings/listing.service';
import { Location } from '@angular/common';
import { Information } from '../../model/information';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.css'],
})
export class AddOrEditComponent implements OnInit {
  editMode: boolean = false;
  selected = 'Doilies';
  listing?: Listing;
  categories = [
    { id: 1, name: 'Bags' },
    { id: 2, name: 'Doilies' },
    { id: 3, name: 'Bookmarks' },
    { id: 4, name: 'Ornaments' },
  ];

  itemGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    thumbImgUrl: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    materials: new FormControl('', Validators.required),
    height: new FormControl('', [Validators.required, Validators.min(0)]),
    width: new FormControl('', [Validators.required, Validators.min(0)]),
    depth: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService,
    private location: Location,
    private router: Router
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

  getListingData(listingId: string) {
    this.listingService.getListing(listingId).subscribe((listing) => {
      this.listing = listing;

      if (this.listing) {
        this.selected = this.listing.category;
        this.itemGroup.patchValue({
          title: this.listing.title,
          category: this.listing.category,
          price: this.listing.price,
          amount: this.listing.inStock,
          thumbImgUrl: this.listing.thumbImgUrl,
          imageUrl: this.listing.imageUrl,
          description: this.listing.info.description,
          materials: this.listing.info.materials,
          height: this.listing.info.height,
          width: this.listing.info.width,
          depth: this.listing.info.depth,
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    if (this.listing) {
      this.listing.title = this.itemGroup.value.title;
      this.listing.price = this.itemGroup.value.price;
      this.listing.category = this.itemGroup.value.category;
      this.listing.thumbImgUrl = this.itemGroup.value.thumbImgUrl;
      this.listing.imageUrl = this.itemGroup.value.imageUrl;
      this.listing.inStock = this.itemGroup.value.amount;
      this.listing.inCart = 0;
      this.listing.info.description = this.itemGroup.value.description;
      this.listing.info.materials = this.itemGroup.value.materials;
      this.listing.info.height = this.itemGroup.value.height;
      this.listing.info.width = this.itemGroup.value.width;
      this.listing.info.depth = this.itemGroup.value.depth;

      console.log(this.listing);
      this.listingService.updateListing(this.listing).subscribe(async (res) => {
        if (res.status == 200) {
          await this.router.navigateByUrl('/listings/' + this.listing?.id);
        }
      });
    } else {
      let listingInfo: Information = {
        description: this.itemGroup.value.description,
        materials: this.itemGroup.value.materials,
        height: this.itemGroup.value.height,
        width: this.itemGroup.value.width,
        depth: this.itemGroup.value.depth,
      };
      let newListing: Listing = {
        id: 0,
        title: this.itemGroup.value.title,
        info: listingInfo,
        price: this.itemGroup.value.price,
        category: this.itemGroup.value.category,
        thumbImgUrl: this.itemGroup.value.thumbImgUrl,
        imageUrl: this.itemGroup.value.imageUrl,
        inStock: this.itemGroup.value.amount,
        inCart: 0,
      };

      console.log(newListing);
      this.listingService.addListing(newListing).subscribe(async (res) => {
        await this.router.navigateByUrl('/listings');
      });
    }
  }
}
