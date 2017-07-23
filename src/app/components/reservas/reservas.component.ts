import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { Router } from '@angular/router';
import { ReservaService } from "app/services/reserva.service";
import { MotoristaService } from "app/services/motorista.service";
import { VeiculoService } from "app/services/veiculo.service";
import { PeriodoService } from "app/services/periodo.service";
import { NotaFiscalService } from "app/services/notafiscal.service";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  providers: [ReservaService, MotoristaService, VeiculoService, PeriodoService, NotaFiscalService]
})
export class ReservasComponent implements OnInit {

  public form: FormGroup;
  public notifications: any[] = [];
  public motoristas: any[] = [];
  public veiculos: any[] = [];
  public periodos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private servicoReserva: ReservaService,
    private servicoMotorista: MotoristaService,
    private servicoVeiculo: VeiculoService,
    private servicoPeriodo: PeriodoService,
    private servicoNotaFiscal: NotaFiscalService,
    private router: Router) {
   
    this.form = this.fb.group({
      motoristaId: ['', Validators.compose([
        Validators.required
      ])],
      veiculoId: ['', Validators.compose([
        Validators.required
      ])],
      periodoId: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  obterMotoristas() {
    this.servicoMotorista.obterTodos()
      .subscribe(result => {
        this.motoristas = result;
      });
  }

  obterVeiculos() {
    this.servicoVeiculo.obterTodos()
      .subscribe(result => {
        this.veiculos = result;
      });
  }

  obterPeriodos() {
    this.servicoPeriodo.obterTodos()
      .subscribe(result => {
        this.periodos = result;
      });
  }

  ngOnInit() {

    this.obterMotoristas();
    this.obterVeiculos();
    this.obterPeriodos();
  }

  submit() {

    let form = this.form.value;

    let dados = {
      motoristaId: form.motoristaId,
      veiculoId: form.veiculoId,
      periodoId: form.periodoId,
      notasFiscais: []
    };

    for (let i of this.servicoNotaFiscal.obterNotasFiscais()) {
      dados.notasFiscais.push({
        numero: i.numero,
        serie: i.serie,
        emissao: i.emissao
      })
    }
    
    this.servicoReserva.registrar(JSON.stringify(dados)).subscribe(result => {
      this.servicoNotaFiscal.limpar();
      this.router.navigateByUrl('/reservas/lista');
    }, erros => {
      this.notifications = JSON.parse(erros._body).erros;
    });

  }

}
