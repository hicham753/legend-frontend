import { Component,OnInit, OnChanges } from '@angular/core';
import { Product } from '../products/products.model';
import { ShoppingCartService } from '../shopping-cart.service';
import {  Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  products: Product[]=[
    
  ];
  numOfItems: number = 0;
  

  private cartSubscription: Subscription | undefined;
  


  constructor(private shoppingCartService: ShoppingCartService , private ts : ToastrService){
    this.products = shoppingCartService.cartItem;
    
  }

  ngOnInit() {
    this.cartSubscription = this.shoppingCartService.numOfItem.subscribe((num) => {
      this.numOfItems = num;
    });

    

    this.products = this.shoppingCartService.cartItem;
  }

 

  minusIncrement(product: Product){
    
    if(product.quantity > 0){
      product.quantity --;

    }
  }

  plusIncrement(product: Product){
    product.quantity++;
  }

  // deleteProduct(productId: number){
  //   this.products=this.products.filter(
  //     (product)=>product.id !== productId)
  // }

  

  deletefromCart(productId: number, product: Product){
    this.ts.error(`${product.name} has been deleted from your cart`, 'Product Deleted', {
      timeOut: 3000,
    });
    console.log(productId);
    this.shoppingCartService.deleteItem(productId)
    this.products = this.shoppingCartService.cartItem;
    // Forcer la détection des changements
    //this.cdr.detectChanges();
  }

 

  subtotal(product: Product): number {
    return product.quantity * product.price;
  }

  totalSubtotal(){
    return  this.products.reduce((total, product)=>{
      console.log(total);
      return total +(product.quantity * product.price);
    }, 0).toFixed(2);

  }

  totalPrice(){
    return  +this.totalSubtotal() + 4.99;
  }

  

}
