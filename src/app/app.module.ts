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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SerieAComponent } from './componets/clubs/serie-a/serie-a.component';
import { PremierLeagueComponent } from './componets/clubs/premier-league/premier-league.component';
import { BundesligaComponent } from './componets/clubs/bundesliga/bundesliga.component';
import { Ligue1Component } from './componets/clubs/ligue1/ligue1.component';
import { OthersComponent } from './componets/clubs/others/others.component';
import { LigaComponent } from './componets/clubs/liga/liga.component';

// import { StripeComponent } from './componets/stripe/stripe.component';
import { CardComponent } from './componets/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componets/login/login.component';
import { SignUpComponent } from './componets/sign-up/sign-up.component';
import { ProductUploadComponent } from './componets/products/product-upload/product-upload.component';
import { PaymentComponent } from './componets/payment/payment.component';

// import { StripeService } from './stripe.service';



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
    ShoppingCartComponent,
    LigaComponent,
    SerieAComponent,
    PremierLeagueComponent,
    BundesligaComponent,
    Ligue1Component,
    OthersComponent,
    // StripeService,
    CardComponent,
    LoginComponent,
    SignUpComponent,
    ProductUploadComponent,
    PaymentComponent,

       

  ],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      // timeOut: 3000,
      // positionClass: 'toast-top-right',
      // preventDuplicates: true,
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
