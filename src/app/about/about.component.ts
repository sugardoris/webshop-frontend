import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.authService.getCurrentUser();
  }
}
