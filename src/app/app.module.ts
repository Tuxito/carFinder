import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule}  from '@angular/router'
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars/cars-list.component';

import { CarsService } from './services/cars.service';

import { appRoutes } from './app.routes'; 


@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
