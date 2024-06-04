import { Component } from '@angular/core';
import { Product } from './products.model';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];

  selectedProduct!: Product;


  constructor(private productService: ProductsService, private route: ActivatedRoute,
     private shoppingCartService: ShoppingCartService) { }

     ngOnInit() {
      this.productService.getProducts().subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        error => {
          console.error('Error fetching products:', error);
        }
      );
    }

  // addToCart(product: products){
  //   console.log(products);
    
  //   this.shoppingCartService.addItem(product)

  // }

  addToCart(product: Product) {
    if (this.products) {
      this.shoppingCartService.addItem(product);
    }
  }
  

}
