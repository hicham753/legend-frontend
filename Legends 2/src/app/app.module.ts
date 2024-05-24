import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';

import { HomeComponent } from './componets/home/home.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './componets/footer/footer.component';
import { ProductsComponent } from './componets/products/products.component';
import { ProductCardComponent } from './componets/products/product-card/product-card.component';
import { ProductListComponent } from './componets/products/product-list/product-list.component';
import { register } from 'swiper/element/bundle';
import { ShoppingCartComponent } from './componets/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductListComponent,
    ShoppingCartComponent
   
  ],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      // timeOut: 3000,
      // positionClass: 'toast-top-right',
      // preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
