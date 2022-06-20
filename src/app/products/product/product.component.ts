import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  add(product: Product) {
    this.addProduct.emit(product);
  }
  showDetails(product: Product){
    this.router.navigate(['/product', {'product':product}])
  }
}
