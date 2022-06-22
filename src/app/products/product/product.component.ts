import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;
  qty: string='1';
  @Output() addProduct: EventEmitter<CartItem> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.addProduct.emit({product:this.product, qty:Number(this.qty)});
  }
  showDetails(product: Product){
    this.router.navigate(['/product',{'id':(product.id)}])
  }
}
