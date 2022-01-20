import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailComponent } from './listings/listing-detail/listing-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentCompleteComponent } from './payment-complete/payment-complete.component';
import { LoginComponent } from './login/login.component';
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/:id', component: ListingDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'purchase', component: PaymentCompleteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', component: ListingsComponent },
  { path: 'admin/add-or-edit', component: AddOrEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
