import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { VeiculoService } from "app/services/veiculo.service";

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  providers: [VeiculoService]
})
export class ListaVeiculosComponent implements OnInit {

  private veiculos;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private service: VeiculoService) {
    this.form = this.fb.group({
      placa: ['', Validators.compose([
        Validators.required
      ])],
      renavam: ['', Validators.compose([
        Validators.required
      ])],
      modelo: ['', Validators.compose([
        Validators.required
      ])],
      cor: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {

    this.service.obterTodos().subscribe(result => {
      this.veiculos = result;
    });
  }

  buscar() {

    let form = this.form.value;
    this.service.buscar(form).subscribe(result => {
      this.veiculos = result;
    });
  }

}
