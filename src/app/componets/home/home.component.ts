import { Component } from '@angular/core';
import { Product } from '../products/products.model';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products : Product[] = [];

  // popularProducts: undefined | Product[];



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

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }




  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(){
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  } 

}
