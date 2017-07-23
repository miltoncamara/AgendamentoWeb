import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { ServiceBase } from "app/services/service.base";
import 'rxjs/add/operator/map';

@Injectable()
export class ReservaService extends ServiceBase {

    registrar(data: any) {

        return this.http
            .post(environment.serviceUrl + 'v1/reservas', data, super.headerOptions())
            .map(super.extractData)
            .catch((super.serviceErro));
    }

    obterTodos() {

        return this.http
            .get(environment.serviceUrl + 'v1/reservas', super.headerOptions())
            .map(super.extractData)
            .catch((super.serviceErro));
    }

    buscar(data: any) {

        let params = new URLSearchParams();

        for (let key in data)
            params.set(key, data[key]);

        return this.http
            .get(environment.serviceUrl + 'v1/reservas/filtro/?' + params.toString(), super.headerOptions())
            .map(super.extractData)
            .catch((super.serviceErro));
    }
}