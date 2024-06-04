import { Component, OnInit } from '@angular/core';
import { Product } from './componets/products/products.model';
import { ShoppingCartService } from './componets/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Legends';
  itemInCart!: number;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.numOfItem.subscribe(numOfItems => {
      this.itemInCart = numOfItems;
    });
  }

  products : Product[] = [
    
  ];
}

// new products(1,
//   'RONALDO BRAZIL 1998 HOME',
//   'assets/Brazil98.webp',
//   29.99,
//   39.99,
//   5
// ),
// new products(2,
//   'ZIDANE FRANCE 2006 HOME',
//   'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
//   32.99,
//   42.33,
//   50

// ),
// new products(3,
//   'RONALDO BRAZIL 1998 HOME',
//   'assets/Brazil98.webp',
//   29.99,
//   39.99,
//   15
// ),
// new products(4,
//   'ZIDANE FRANCE 2006 HOME',
//   'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
//   32.99,
//   42.33,
//   10

// )
