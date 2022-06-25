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
  product: Product={name:'', id:0, category:"", descr:"", price:0};
  qty: string='';
  @Output() addCartItem: EventEmitter<CartItem> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    if(this.qty){

      this.addCartItem.emit({product:this.product, qty:Number(this.qty)});
    }
  }
  showDetails(product: Product){
    this.router.navigate(['/product',{'id':(product.id)}])
  }
  qtyChanged(event: string){
    this.qty = event
  }
}
