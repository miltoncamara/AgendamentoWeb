import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NotaFiscalService } from "app/services/notafiscal.service";
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reserva-nota-fiscal',
  templateUrl: './reserva-nota-fiscal.component.html',
  providers: [NotaFiscalService]
})
export class ReservaNotaFiscalComponent implements OnInit {

  public form: FormGroup;
  public notas: any[] = [];

  constructor(private fb: FormBuilder, private service: NotaFiscalService) {

    this.form = this.fb.group({
      numero: ['', Validators.compose([
        Validators.required
      ])],
      serie: ['', Validators.compose([
        Validators.required
      ])],
      emissao: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    this.notas = this.service.obterNotasFiscais();
  }

  addItem(nota: any) {
    nota = this.form.value;
    this.service.addItem({ numero: nota.numero, serie: nota.serie, emissao: nota.emissao });
  }

  removerItem(nota: any) {

    this.service.removerItem(nota);
  }

}
