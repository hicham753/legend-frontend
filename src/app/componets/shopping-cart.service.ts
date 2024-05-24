import { Injectable } from '@angular/core';
import { products } from './products/products.model';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItem: products[] = []; 
  numOfItem = new BehaviorSubject<number>(0);
  

  constructor(private toastr: ToastrService) { }

  addItem(product: products) {
    const exist = this.cartItem.find((item) => item.id === product.id);

    if (exist) {
      exist.quantity++;
    } else {

      const productCopy = { ...product, quantity: 1 };
      this.cartItem.push(productCopy);
      this.numOfItem.next(this.cartItem.length);
    }
    this.toastr.success(`${product.name} has been added to your cart`, 'Product Added');
    console.log("test");
    // this.toastr.error('everything is broken', 'Major Error', {
    //   timeOut: 3000,
    // });
  }
  


  // deleteItem(productId: number) {
  //   this.cartItem = this.cartItem.filter(item => item.id !== productId);
  //   this.numOfItem.next(this.cartItem.length);
  // }
  
  deleteItem(productId: number) {
    // Filtrer les articles du panier pour exclure l'article avec l'ID spécifié
    this.cartItem = this.cartItem.filter(item => item.id !== productId);
    // Mettre à jour le nombre d'articles dans le panier
    this.numOfItem.next(this.cartItem.length);
  }

}
  
  

