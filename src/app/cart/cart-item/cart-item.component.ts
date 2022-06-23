import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem
  qty:string = "0"
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  handleChange(event: Event){
    if ((event.target as HTMLInputElement).value ){
      this.cartItem.qty = Number((event.target as HTMLInputElement).value)
      this.cartService.addItem(this.cartItem)
    }
  }

}
