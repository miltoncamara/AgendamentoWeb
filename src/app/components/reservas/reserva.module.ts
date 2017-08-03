import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasComponent } from './reservas-cadastro/reservas.component';
import { ReservasListaComponent } from './reservas-lista/reservas-lista.component';
import { ReservaNotaFiscalComponent } from './reserva-nota-fiscal/reserva-nota-fiscal.component';
import { ReservaService } from "app/services/reserva.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReservasComponent, ReservasListaComponent, ReservaNotaFiscalComponent
  ],
  exports:[
    ReservasComponent, ReservasListaComponent, ReservaNotaFiscalComponent
  ],
  providers: [ReservaService]
})
export class ReservaModule { }
