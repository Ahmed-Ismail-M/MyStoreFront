import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'product', component: ProductItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
