import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing, RoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

// Shared
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SairComponent } from './components/sair/sair.component';
import { LoginComponent } from './components/login/login.component';
import { ListaMotoristasComponent } from './components/lista-motoristas/lista-motoristas.component';
import { ListaVeiculosComponent } from './components/lista-veiculos/lista-veiculos.component';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';
import { NotaFiscalComponent } from './components/nota-fiscal/nota-fiscal.component';

// Services
import { AuthService } from "app/services/auth.service";
import { MotoristaService } from "app/services/motorista.service";
import { ReservaService } from "app/services/reserva.service";
import { TransportadoraService } from "app/services/transportadora.service";
import { VeiculoService } from "app/services/veiculo.service";
import { PeriodoService } from "app/services/periodo.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,    
    NotaFiscalComponent,
    ListaMotoristasComponent,
    VeiculosComponent,
    MotoristasComponent,
    ReservasComponent,
    RegistroComponent,
    HomeComponent,
    SairComponent,
    LoginComponent,
    ListaVeiculosComponent,
    ListaReservasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [AuthService, MotoristaService, ReservaService, TransportadoraService, VeiculoService, PeriodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
