import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { Router } from '@angular/router';
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public notifications: any[] = [];

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
      }, erros => {
        this.notifications = JSON.parse(erros._body).erros;
      });
  }
}