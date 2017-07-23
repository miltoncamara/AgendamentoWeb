import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export abstract class ServiceBase {

    constructor(public http: Http, private router: Router) { }

    protected headerOptions() {
        var token = localStorage.getItem('agendamento.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });

        headers.append('Authorization', `Bearer ${token}`);
        return new RequestOptions({ headers: headers });
    }

     protected serviceErro(erro: Response | any) {
        
        let errMsg: string;

        if (erro instanceof Response) {
            if (erro.status == 401){
                this.router.navigateByUrl('/login');
            }          
        } else {
            errMsg = erro.message ? erro.message : erro.toString();
        }
        return Observable.throw(erro);
    }

     protected extractData(response: Response) {
        let body = response.json();
        return body.dados || {};
    }

}