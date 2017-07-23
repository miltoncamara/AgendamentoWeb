import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { ServiceBase } from "app/services/service.base";
import 'rxjs/add/operator/map';

@Injectable()
export class MotoristaService extends ServiceBase {

    registrar(data: any) {

        return this.http
            .post(environment.serviceUrl + 'v1/motoristas', data, super.headerOptions())
            .map(super.extractData);
    }

    obterTodos() {

        return this.http
            .get(environment.serviceUrl + 'v1/motoristas', super.headerOptions())
            .map(super.extractData);
    }

    buscar(data: any) {

        let params = new URLSearchParams();

        for (let key in data)
            params.set(key, data[key]);

        return this.http
            .get(environment.serviceUrl + 'v1/motoristas/filtro/?' + params.toString(), super.headerOptions())
            .map(super.extractData);
    }
}