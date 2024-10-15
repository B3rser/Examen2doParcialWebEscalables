import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

export const routes: Routes = [
    { path: 'home',component: HomeComponent},
    { path: ':productIDC', component: ProductDetailsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
