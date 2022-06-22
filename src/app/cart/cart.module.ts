import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports:[CartListComponent]
  
})
export class CartModule { }
