import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:8081/api';
  listingsUrl = `${this.apiUrl}/listings`;

  getListings() {
    return this.http.get(this.listingsUrl);
  }
}
