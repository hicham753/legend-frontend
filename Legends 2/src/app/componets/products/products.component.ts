import { Component } from '@angular/core';
import { products } from './products.model';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  selectedProduct!: products

  constructor(private productService: ProductsService, private route: ActivatedRoute,
     private shoppingCartService: ShoppingCartService) { }

  ngOnInit(){
    const id= this.route.snapshot.params['id'];
    this.selectedProduct = this.productService.getproduct(id) as products;

    if (!this.selectedProduct) {
      console.error(`Product with id ${id} not found.`);
  }
  }

  // addToCart(product: products){
  //   console.log(products);
    
  //   this.shoppingCartService.addItem(product)

  // }

  addToCart() {
    if (this.selectedProduct) {
      this.shoppingCartService.addItem(this.selectedProduct);
    }
  }
  

}
