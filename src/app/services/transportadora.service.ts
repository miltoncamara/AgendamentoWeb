import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { ServiceBase } from "app/services/service.base";
import 'rxjs/add/operator/map';

@Injectable()
export class TransportadoraService extends ServiceBase {

    registrar(data: any) {        
       return this.http
            .post(environment.serviceUrl + 'v1/transportadoras', data)
            .map(super.extractData);
    }
}