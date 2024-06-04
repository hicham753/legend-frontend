import { Component, Input } from '@angular/core';
import { Product } from '../products.model';
import { ShoppingCartService } from '../../shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products!: Product[]; 

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(product: Product) {
    console.log(product);
    this.shoppingCartService.addItem(product);
  }
}
