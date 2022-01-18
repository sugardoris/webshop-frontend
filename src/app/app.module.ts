import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailComponent } from './listings/listing-detail/listing-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MATERIAL_SANITY_CHECKS,
  MatRippleModule,
} from '@angular/material/core';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentCompleteComponent } from './payment-complete/payment-complete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingDetailComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    PaymentCompleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
