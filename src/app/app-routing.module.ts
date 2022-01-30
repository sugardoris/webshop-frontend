import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailComponent } from './listings/listing-detail/listing-detail.component';
import { CartComponent } from './user-orders/cart/cart.component';
import { CheckoutComponent } from './user-orders/checkout/checkout.component';
import { PaymentCompleteComponent } from './user-orders/payment-complete/payment-complete.component';
import { LoginComponent } from './auth/login/login.component';
import { AddOrEditComponent } from './admin/add-or-edit/add-or-edit.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/:id', component: ListingDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'purchase', component: PaymentCompleteComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/:mode',
    component: AddOrEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/:mode/:id',
    component: AddOrEditComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
