import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransportadoraService } from "app/services/transportadora.service";

@Component({
  selector: 'app-registrar-page',
  templateUrl: './registrar-page.component.html',
    providers: [TransportadoraService]
})
export class RegistrarPageComponent implements OnInit {

  public form: FormGroup;
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private servico: TransportadoraService) {
    this.form = this.fb.group({
      razaoSocial: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(150),
        Validators.required
      ])],
      cnpj: ['', Validators.compose([
        Validators.minLength(18),
        Validators.maxLength(18),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.required
      ])],     
      senha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(8),
        Validators.required
      ])],
      confirmarSenha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(8),
        Validators.required
      ])]     
    });
  }

  ngOnInit() {
  }

  submit() {
    this.servico.registrar(this.form.value).subscribe(result => {
      this.router.navigateByUrl('/');
    }, error => {
      this.errors = JSON.parse(error._body).errors;
    });
  }

}
