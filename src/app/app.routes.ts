import { Routes, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Main } from './components/main/main';
import { Home } from './components/home/home';
import { ErrorPage } from './components/error-page/error-page';
import { ProductDetails } from './components/product-details/product-details';
import { Login } from './components/login/login';
import { ProductService } from './services/product-service';
import { Iproduct } from './models/iproduct';
import { Dashboard } from './components/dashboard/dashboard';
import { authorizationGuard } from './juards/authorization-guard';
import { Contact } from './components/contact/contact';
import { Signup } from './components/signup/signup';

const productResolver: ResolveFn<Iproduct> = (route) => {
  const service = inject(ProductService);
  const id = Number(route.paramMap.get('id'));
  return service.getOneProduct(id);
};

const homeresolver: ResolveFn<any> = (route) => {
  const service = inject(ProductService);
  return service.getall();
}; 

export const routes: Routes = [
    {
  path: '',
  component: Main,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, runGuardsAndResolvers: 'always', resolve: { products: homeresolver } } ,
    { path: 'product/:id', component: ProductDetails, resolve: { product: productResolver } },
    { path: 'dashboard', component:Dashboard, canActivate: [authorizationGuard], resolve: { products: homeresolver } },
    { path: 'contact', component: Contact }
  ]
},
{ path: 'login', component: Login },
{ path: 'signup', component: Signup },
{ path: '**', component: ErrorPage }

]
;
