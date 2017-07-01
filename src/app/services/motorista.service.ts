import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class MotoristaService {

    constructor(private http: Http) { }

    registrar(data: any) {
       return this.http
            .post(environment.serviceUrl + 'v1/motoristas', data)
            .map((res: Response) => res.json());
    }
}