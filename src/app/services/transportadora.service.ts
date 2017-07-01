import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class TransportadoraService {

    constructor(private http: Http) { }

    registrar(data: any) {
        console.log(data);
       return this.http
            .post(environment.serviceUrl + 'v1/transportadoras', data)
            .map((res: Response) => res.json());
    }
}