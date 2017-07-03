import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class MotoristaService {

    constructor(private http: Http) { }

    registrar(data: any) {

        var token = localStorage.getItem('agendamento.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });

        headers.append('Authorization', `Bearer ${token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(environment.serviceUrl + 'v1/motoristas', data, options)
            .map((res: Response) => res.json());
    }
}