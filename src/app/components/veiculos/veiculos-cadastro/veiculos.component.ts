import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VeiculoService } from "app/services/veiculo.service";

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  providers: [VeiculoService]
})
export class VeiculosComponent implements OnInit {

  public form: FormGroup;
  public notifications: any[] = [];

  constructor(private fb: FormBuilder, private servico: VeiculoService, private router: Router) {
    this.form = this.fb.group({
      placa: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required
      ])],
      renavam: ['', Validators.compose([
        Validators.minLength(0),
        Validators.maxLength(11),
        Validators.required
      ])],
      modelo: ['', Validators.compose([
        Validators.maxLength(50),
        Validators.required
      ])],
      cor: ['', Validators.compose([
        Validators.maxLength(50),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {

    this.servico.registrar(this.form.value).subscribe(result => {
      this.router.navigateByUrl('/veiculos/lista');
    }, erros => {
      this.notifications = JSON.parse(erros._body).erros;
    });
  }

}
