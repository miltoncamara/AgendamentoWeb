import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotaFiscalService {

    public notas: any[] = [];

    constructor() { }

    addItem(nota: any) {

        this.notas.push({ numero: nota.numero, serie: nota.serie, emissao: nota.emissao });
        sessionStorage.setItem('agendamento.notas', JSON.stringify(this.notas));
    }

    obterNotasFiscais(): any[] {

        var data = sessionStorage.getItem('agendamento.notas');
        if (data) {
            this.notas = JSON.parse(data);
        }
        return this.notas;
    }

    removerItem(nota: any) {

        for (var item of this.notas) {
            if (item.numero == nota.numero) {
                var index = this.notas.indexOf(item);
                this.notas.splice(index, 1);
            }
        }
    }

    limpar() {
        this.notas = [];
        sessionStorage.removeItem('agendamento.notas');
    }

}