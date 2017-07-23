import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NotaFiscalService } from "app/services/notafiscal.service";

@Component({
  selector: 'app-nota-fiscal',
  templateUrl: './nota-fiscal.component.html',
  providers: [NotaFiscalService]
})
export class NotaFiscalComponent implements OnInit {

  public form: FormGroup;
  public notas: any[];

  constructor(private fb: FormBuilder, private service: NotaFiscalService) {

    this.service.notasChange.subscribe((data) => {
      this.notas = data;
    });

    this.service.load();

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
    this.service.notasChange.subscribe((data) => {
      this.notas = data;
    });
    this.notas = this.service.notas;
  }

  addItem(nota: any) {
    nota = this.form.value;
    this.service.addItem({ numero: nota.numero, serie: nota.serie, emissao: nota.emissao });
  }

  removerItem(item: any) {
    this.service.removerItem(item.numero);
  }

}
