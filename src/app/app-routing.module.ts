import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './componets/shopping-cart/shopping-cart.component';
import { HomeComponent } from './componets/home/home.component';
import { ProductsComponent } from './componets/products/products.component';

const routes: Routes = [
  { path: 'shopping-cart', component:ShoppingCartComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo :'home', pathMatch :'full'},
  { path: 'products', component: ProductsComponent},  
  { path: 'products/id', component: ProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
