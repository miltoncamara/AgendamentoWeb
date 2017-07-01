import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { Router } from '@angular/router';
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [AuthService]
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public erros: any[] = [];

  constructor(private fb: FormBuilder, private servico: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.compose([        
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(6),
        Validators.required
      ])]
    });

    var token = localStorage.getItem('agendamento.token');

    if (token) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {

  }

  submit() {
    this.servico
      .autenticar(this.form.value)
      .subscribe(result => {
        localStorage.setItem('agendamento.token', result.token);
        localStorage.setItem('agendamento.usuario', JSON.stringify(result.usuario));
        this.router.navigateByUrl('/home');
      }, error => {
        this.erros = JSON.parse(error._body).erros;
      });
  }
}