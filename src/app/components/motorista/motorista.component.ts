import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { Router } from '@angular/router';
import { MotoristaService } from "app/services/motorista.service";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  providers: [MotoristaService]
})
export class MotoristaComponent implements OnInit {

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

  ngOnInit() {
  }

  submit() {

    this.servico.registrar(this.form.value).subscribe(result => {
      this.router.navigateByUrl('/');
    }, erros => {
      this.notifications = JSON.parse(erros._body).erros;      
    });
  }

}
