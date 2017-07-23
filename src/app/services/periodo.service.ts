import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { ServiceBase } from "app/services/service.base";
import 'rxjs/add/operator/map';

@Injectable()
export class PeriodoService extends ServiceBase {

    obterTodos() {

        return this.http
            .get(environment.serviceUrl + 'v1/periodos', super.headerOptions())
            .map(super.extractData)
            .catch((super.serviceErro));
    }
}