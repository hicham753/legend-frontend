import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { ProductsService } from '../../products.service';
import { ShoppingCartService } from '../../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [];
  @Input() product!: Product;
  private popupSubscription: Subscription | undefined;

  constructor(
    private shoppingCartService: ShoppingCartService, 
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    console.log(product);
    this.shoppingCartService.addItem(product);
  }
}
