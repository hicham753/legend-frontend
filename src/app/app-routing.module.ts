import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './componets/shopping-cart/shopping-cart.component';
import { HomeComponent } from './componets/home/home.component';
import { ProductsComponent } from './componets/products/products.component';
import { LigaComponent } from './componets/clubs/liga/liga.component';
import { SerieAComponent } from './componets/clubs/serie-a/serie-a.component';
import { PremierLeagueComponent } from './componets/clubs/premier-league/premier-league.component';
import { BundesligaComponent } from './componets/clubs/bundesliga/bundesliga.component';
import { Ligue1Component } from './componets/clubs/ligue1/ligue1.component';
import { OthersComponent } from './componets/clubs/others/others.component';
import { CardComponent } from './componets/card/card.component';
import { LoginComponent } from './componets/login/login.component';
import { SignUpComponent } from './componets/sign-up/sign-up.component';
import { ProductUploadComponent } from './componets/products/product-upload/product-upload.component';

const routes: Routes = [
  { path: 'shopping-cart', component:ShoppingCartComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo :'home', pathMatch :'full'},
  { path: 'liga', component: LigaComponent },
  { path: 'serieA', component: SerieAComponent },
  { path: 'premierLeague', component: PremierLeagueComponent },
  { path: 'bundesliga', component: BundesligaComponent },
  { path: 'ligue1', component: Ligue1Component },
  { path: 'others', component: OthersComponent },
  { path: 'products', component: ProductsComponent},  
  { path: 'products/id', component: ProductsComponent},
  { path: 'checkout', component:  CardComponent},
  {path : 'login', component : LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'upload',component:ProductUploadComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
