import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/products.model';



@Component({
  selector: 'app-serie-a',
  templateUrl: './serie-a.component.html',
  styleUrls: ['./serie-a.component.css']
})
export class SerieAComponent  {

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