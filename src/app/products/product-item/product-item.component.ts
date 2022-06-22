import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = {
      id: 0,
      name: '',
      img_url: '',
      category: '',
      price: 0,
      descr: '',
    };
  }

  ngOnInit(): void {
    const product_id = this.route.snapshot.paramMap.get('id') as string;
    this.productService.getProduct(product_id).subscribe((resp) => {
      this.product = resp as Product;
    });
  }
}
