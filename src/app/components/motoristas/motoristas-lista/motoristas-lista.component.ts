import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MotoristaService } from "app/services/motorista.service";

@Component({
  selector: 'app-motoristas-lista',
  templateUrl: './motoristas-lista.component.html',
  providers: [MotoristaService]
})
export class MotoristasListaComponent implements OnInit {

  private motoristas;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private service: MotoristaService) {
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.required
      ])],
      cnh: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    this.service.obterTodos().subscribe(result => {
      this.motoristas = result;
    });
  }

  buscar() {
    let form = this.form.value;    
    this.service.buscar(form).subscribe(result => {
      this.motoristas = result;
    });
  }

}
