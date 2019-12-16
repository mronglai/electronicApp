import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from './pages/products/products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsDetailsComponent } from './pages/products/products-details/products-details.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ProductsComputersComponent } from "./pages/products/products-computers/products-computers.component";
import { ProductsMobilephonesComponent } from "./pages/products/products-mobilephones/products-mobilephones.component";

// URL is controlled by Routing
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ,{path: 'home', component: HomeComponent}
  ,{path: 'products', component: ProductsComponent}
  ,{path: 'contact-us', component: ContactUsComponent}
  ,{path: 'products-details', component: ProductsDetailsComponent}
  ,{path: 'products-list', component: ProductsListComponent}
  ,{path: 'login', component: LoginComponent}
  ,{path: 'not-found', component: PageNotFoundComponent}
  ,{path: '**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
