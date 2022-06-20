import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ], exports:[
    ProductListComponent
  ]
})
export class ProductsModule { }
