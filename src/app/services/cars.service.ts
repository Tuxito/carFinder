import { Injectable } from "@angular/core";

import { Brand } from "../models/brand.models";
import { Model } from "../models/model.models";
import { Version } from "../models/version.models";

import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CarsService{
    private baseUrl: string = 'http://localhost:8080/poc';
    
    constructor(private http : Http){
    }

    getBrands() : Observable<Brand[]>{
        let brandsList$ = this.http
            .get(`${this.baseUrl}/brands`, 
                { headers: this.getHeaders() })
            .map(mapBrands)
           
        return brandsList$;
    }

    getModelsByBrand(brandId : number) : Observable<Model[]>{
        let modelsList$ = this.http
            .get(`${this.baseUrl}/models/` + brandId, 
                { headers: this.getHeaders() })
            .map(mapModels)
           
        return modelsList$;
    }

    getVersionsByModel(modelId : number) : Observable<Version[]>{
        let versionsList$ = this.http
            .get(`${this.baseUrl}/versions/` + modelId, 
                { headers: this.getHeaders() })
            .map(mapVersions)
           
        return versionsList$;
    }

    private getHeaders(){
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }


}

/**
 * Function to map server response into Brand objects
 * @param response 
 */
function mapBrands(response:Response): Brand[]{    
    let jsonData = response.json();

    return jsonData;
}

/**
 * Function to map server response to Models
 * @param response 
 */
function mapModels(response:Response): Model[]{    
    let jsonData = response.json();

    return jsonData;
}

/**
 * Function to map the server response into Version objects
 * @param response 
 */
function mapVersions(response:Response): Version[]{    
    let jsonData = response.json();

    return jsonData;
}