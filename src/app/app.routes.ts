import { Routes } from '@angular/router';
import { CarsListComponent } from './cars/cars-list.component';

export const appRoutes : Routes = [
    { path : 'carFinder', component : CarsListComponent},
    { path : '', redirectTo: '/carFinder', pathMatch : 'full'}
]