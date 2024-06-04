
import {Observable} from "rxjs";
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './products/products.model'; // assuming `products` is the name of your class
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  selectedProduct = new EventEmitter<Product>();

  private baseUrl = 'http://localhost:8079/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  uploadProduct(productData: FormData): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/upload`, productData);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  popularProducts(){
    return this.http.get<Product[]>("http://localhost:8079/api/products?_limit=9");
  }


  // getProducts(){
  //   return this.products;
  // }

  // getproduct(id: number){
  //   return this.products.find(
  //     product => product.id === id);
  // }

  // private products: products[] = [
  //   new products(1,
  //     'RONALDO BRAZIL 1998 HOME',
  //     'assets/Brazil98.webp',
  //     29.99,
  //       39.99,
  //     5
  //   ),
  //   new products(2,
  //     'ZIDANE FRANCE 2006 HOME',
  //     'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
  //     32.99,
  //     42.33,
  //     50

  //   ),
  //   new products(3,
  //     'RONALDO BRAZIL 1998 HOME',
  //     'assets/Brazil98.webp',
  //     29.99,
  //     39.99,
  //     15
  //   ),
  //   new products(4,
  //     'ZIDANE FRANCE 2006 HOME',
  //     'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
  //     32.99,
  //     42.33,
  //     10

  //   )
  // ];
   

  
}
