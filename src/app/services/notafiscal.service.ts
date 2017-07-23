import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotaFiscalService {

    public notas: any[] = [];
    notasChange: Observable<any>;
    notasChangeObserver: Observer<any>;

    constructor() {
        this.notasChange = new Observable((observer: Observer<any>) => {
            this.notasChangeObserver = observer;
        });
    }

    addItem(nota: any) {
        this.obterNotasFiscais();
        if (!this.existeNota(nota.numero)) {
            this.notas.push(nota);
        }
        localStorage.setItem('agendamento.notas', JSON.stringify(this.notas));
        this.notasChangeObserver.next(this.notas);
    }

    removerItem(numero: string) {
        for (var item of this.notas) {
            if (item.numero == numero) {
                var index = this.notas.indexOf(item);
                this.notas.splice(index, 1);
            }
        }
        localStorage.setItem('agendamento.notas', JSON.stringify(this.notas));
        this.notasChangeObserver.next(this.notas);
    }

    load() {
        var data = localStorage.getItem('agendamento.notas');
        if (data) {
            this.notas = JSON.parse(data);
        }
        this.notasChangeObserver.next(this.notas);
    }

    existeNota(numero): boolean {
        for (let i of this.notas) {
            if (i.numero == numero) {
                return true;
            }
        }
        this.notasChangeObserver.next(this.notas);
        return false;
    }

    obterNotasFiscais(): any[] {
        var data = localStorage.getItem('agendamento.notas');
        if (data) {
            this.notas = JSON.parse(data);
        }
        return this.notas;
    }

    limpar() {
        this.notas = [];
        localStorage.removeItem('agendamento.notas');
    }


}