import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from '../components/cart/cart-list/cart-list.component';
import { CartItemComponent } from '../components/cart/cart-item/cart-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [CartListComponent],
})
export class CartModule {}
