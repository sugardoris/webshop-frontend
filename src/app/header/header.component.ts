import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navigatePinterest() {
    const url = 'https://www.pinterest.com/madewithlovecroatia';
    window.open(url, '_blank');
  }

  navigateInsta() {
    const url = 'https://www.instagram.com/mwlcroatia/';
    window.open(url, '_blank');
  }
}
