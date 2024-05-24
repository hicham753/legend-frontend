import { Component,OnInit, OnChanges } from '@angular/core';
import { products } from '../products/products.model';
import { ShoppingCartService } from '../shopping-cart.service';
import {  Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  products: products[]=[
    new products(1,
      'RONALDO BRAZIL 1998 HOME',
      'assets/Brazil98.webp',
      29.99,
      39.99,
      1
    ),
    new products(2,
      'ZIDANE FRANCE 2006 HOME',
      'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
      32.99,
      42.33,
      1

    ),
    new products(3,
      'RONALDO BRAZIL 1998 HOME',
      'assets/Brazil98.webp',
      29.99,
      39.99,
      1
    ),
    new products(4,
      'ZIDANE FRANCE 2006 HOME',
      'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
      32.99,
      42.33,
      1

    )
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

 

  minusIncrement(product: products){
    
    if(product.quantity > 0){
      product.quantity --;

    }
  }

  plusIncrement(product: products){
    product.quantity++;
  }

  // deleteProduct(productId: number){
  //   this.products=this.products.filter(
  //     (product)=>product.id !== productId)
  // }

  

  deletefromCart(productId: number, product: products){
    this.ts.error(`${product.name} has been deleted from your cart`, 'Product Deleted', {
      timeOut: 3000,
    });
    console.log(productId);
    this.shoppingCartService.deleteItem(productId)
    this.products = this.shoppingCartService.cartItem;
    // Forcer la détection des changements
    //this.cdr.detectChanges();
  }

 

  subtotal(product: products): number {
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
