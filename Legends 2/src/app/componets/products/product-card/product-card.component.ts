import { Component, Input, OnInit } from '@angular/core';
import { products } from '../products.model';
import { ProductsService } from '../../products.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../shopping-cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent   {

  @Input() product! : products;

  private popupSubscription: Subscription | undefined;


  constructor(private shoppingCartService: ShoppingCartService){

  }


  
  addToCart(){
    console.log(this.product);
    
    this.shoppingCartService.addItem(this.product)
  }

  
}