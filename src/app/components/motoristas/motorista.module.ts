import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasComponent } from './motoristas-cadastro/motoristas.component';
import { MotoristasListaComponent } from './motoristas-lista/motoristas-lista.component';
import { MotoristaService } from "app/services/motorista.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MotoristasComponent, MotoristasListaComponent
  ],
  exports: [
    MotoristasComponent, MotoristasListaComponent
  ],
  providers: [MotoristaService]
})
export class MotoristaModule { }
