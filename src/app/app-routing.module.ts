import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart-list/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'cart', component: CartComponent },
  {path:'product', component:ProductItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
