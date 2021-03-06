import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ReservaService } from "app/services/reserva.service";

@Component({
  selector: 'app-reservas-lista',
  templateUrl: './reservas-lista.component.html',
  providers: [ReservaService]
})
export class ReservasListaComponent implements OnInit {

  private reservas;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private service: ReservaService) {
    this.form = this.fb.group({
      motorista: ['', Validators.compose([
        Validators.required
      ])],
      veiculo: ['', Validators.compose([
        Validators.required
      ])],
      protocolo: ['', Validators.compose([
        Validators.required
      ])],
      inicio: ['', Validators.compose([
        Validators.required
      ])],
      termino: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {

    this.service.obterTodos().subscribe(result => {
      this.reservas = result;
    });
  }

  buscar() {
    let form = this.form.value;
    this.service.buscar(form).subscribe(result => {
      this.reservas = result;
    });
  }

}
