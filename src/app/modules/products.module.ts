import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/products/product-list/product-list.component';
import { ProductComponent } from '../components/products/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductItemComponent } from '../components/products/product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

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
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
