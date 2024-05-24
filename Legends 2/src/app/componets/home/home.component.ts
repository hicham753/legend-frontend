import { Component } from '@angular/core';
import { products } from '../products/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products : products[] = [
    new products(1,
      'RONALDO BRAZIL 1998 HOME',
      'assets/Brazil98.webp',
      29.99,
      39.99,
      5
    ),
    new products(2,
      'ZIDANE FRANCE 2006 HOME',
      'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
      32.99,
      42.33,
      50

    ),
    new products(3,
      'RONALDO BRAZIL 1998 HOME',
      'assets/Brazil98.webp',
      29.99,
      39.99,
      15
    ),
    new products(4,
      'ZIDANE FRANCE 2006 HOME',
      'https://i.etsystatic.com/38791423/r/il/b95d91/4978998737/il_794xN.4978998737_ely0.jpg',
      32.99,
      42.33,
      10

    )
  ];


  slides = [
    {
      imageUrl: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(123).jpg',
      label: 'First slide label',
      content: 'Some representative placeholder content for the first slide.'
    },
    {
      imageUrl: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(124).jpg',
      label: 'Second slide label',
      content: 'Some representative placeholder content for the second slide.'
    },
    {
      imageUrl: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(125).jpg',
      label: 'Third slide label',
      content: 'Some representative placeholder content for the third slide.'
    }
  ];

  currentSlideIndex = 0;

  constructor() { }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(){
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  } 

}
