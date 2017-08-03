import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosComponent } from './veiculos-cadastro/veiculos.component';
import { VeiculosListaComponent } from './veiculos-lista/veiculos-lista.component';
import { VeiculoService } from "app/services/veiculo.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VeiculosComponent, VeiculosListaComponent
  ],
  exports: [
    VeiculosComponent, VeiculosListaComponent
  ],
  providers: [VeiculoService]
})
export class VeiculoModule { }
