import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule, MatCardModule,MatIconModule, FormsModule
  ],
  exports:[CartListComponent]
  
})
export class CartModule { }
