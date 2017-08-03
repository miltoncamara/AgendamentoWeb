import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MotoristaService } from "app/services/motorista.service";

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  providers: [MotoristaService]
})
export class MotoristasComponent implements OnInit {

  public form: FormGroup;
  public notifications: any[] = [];

  constructor(private fb: FormBuilder, private servico: MotoristaService, private router: Router) {
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(150),
        Validators.required
      ])],
      cnh: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])]
    });
  }

  ngOnInit() { }

  submit() {

    this.servico.registrar(this.form.value).subscribe(result => {
      this.router.navigateByUrl('/motoristas/lista');
    }, erros => {
      this.notifications = JSON.parse(erros._body).erros;
    });
  }

}
