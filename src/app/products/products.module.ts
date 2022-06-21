import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule, RouterModule
  ], exports:[
    ProductListComponent
  ]
})
export class ProductsModule { }
