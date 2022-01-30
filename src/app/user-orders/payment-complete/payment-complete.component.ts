import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.component.html',
  styleUrls: ['./payment-complete.component.css'],
})
export class PaymentCompleteComponent implements OnInit {
  isDone: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.processPayment();
  }

  processPayment() {
    setTimeout(() => {
      this.isDone = true;
    }, 3000);
  }
}
