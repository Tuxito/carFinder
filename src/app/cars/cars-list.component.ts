import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { CarsService } from "../services/cars.service"; 
import { Brand } from "../models/brand.models";
import { Model } from "../models/model.models";

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html'
})

export class CarsListComponent implements OnInit{
    message : String;
    carBrandCollection : any[];
    carModelCollection : any[];
    carVersionCollection : any[];

    constructor(private brandService : CarsService){
        
    }

    ngOnInit(): void {        
        this.message = 'Welcome to the car finder';  
        
        this.brandService.getBrands().subscribe(
             brands => this.carBrandCollection = brands
        );
    }
    
    onChangeBrand(brandId: number){
        this.brandService.getModelsByBrand(brandId).subscribe(
            models => this.carModelCollection = models
       );
    }

    onChangeModel(modelId: number){
        this.brandService.getVersionsByModel(modelId).subscribe(
            versions => this.carVersionCollection = versions
       );
    }
}