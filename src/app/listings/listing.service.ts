import { Injectable } from '@angular/core';
import { Listing } from '../model/listing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}

  private listingsUrl = 'http://localhost:8081/api/listings';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.listingsUrl).pipe(
      tap((_) => console.log('fetched listings')),
      catchError(this.handleError<Listing[]>('getListings', []))
    );
  }

  getListing(listingId: string): Observable<Listing> {
    const url = `${this.listingsUrl}/${listingId}`;
    return this.http.get<Listing>(url).pipe(
      tap((listing) => console.log(`fetched listing with id = ${listing.id}`)),
      catchError(this.handleError<Listing>(`getListing with id = ${listingId}`))
    );
  }

  updateListing(listing: Listing): Observable<any> {
    const url = `${this.listingsUrl}/${listing.id}`;
    return this.http.put(url, listing, this.httpOptions).pipe(
      tap((_) => console.log(`updated listing with id = ${listing.id}`)),
      catchError(this.handleError<any>('updateListing'))
    );
  }

  addListing(listing: Listing): Observable<Listing> {
    return this.http
      .post<Listing>(this.listingsUrl, listing, this.httpOptions)
      .pipe(
        tap((newListing: Listing) =>
          console.log(`added listing with title = ${newListing.title}`)
        ),
        catchError(this.handleError<Listing>('addListing'))
      );
  }

  deleteListing(listingId: string): Observable<Listing> {
    const url = `${this.listingsUrl}/${listingId}`;

    return this.http.delete<Listing>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted listing with id = ${listingId}`)),
      catchError(this.handleError<Listing>('deleteListing'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
