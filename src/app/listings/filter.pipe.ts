import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from '../model/listing';

@Pipe({
  name: 'categoryFilter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  filteredListings: Listing[] = [];
  transform(array: any[], field: string) {
    this.filteredListings = array.filter(
      (element) => element.category == field
    );
    return this.filteredListings;
  }
}
