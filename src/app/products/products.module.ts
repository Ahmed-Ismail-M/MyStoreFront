import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
