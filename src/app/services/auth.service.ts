import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router, private http: Http) { }

    canActivate() {
        if (!localStorage.getItem('agendamento.token')) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

    autenticar(data: any) {
        var dt = "grant_type=senha&email=" + data.email + "&senha=" + data.senha;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(environment.serviceUrl + 'v1/autenticar', dt, options).map((res: Response) => res.json());
    }
}