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

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MotoristasPageComponent } from './pages/motoristas-page/motoristas-page.component';
import { VeiculosPageComponent } from './pages/veiculos-page/veiculos-page.component';
import { ReservasPageComponent } from './pages/reservas-page/reservas-page.component';
import { RegistrarPageComponent } from './pages/registrar-page/registrar-page.component';
import { SairPageComponent } from './pages/sair-page/sair-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// Services
import { AuthService } from "app/services/auth.service";
import { MotoristaService } from "app/services/motorista.service";
import { ReservaService } from "app/services/reserva.service";
import { TransportadoraService } from "app/services/transportadora.service";
import { VeiculoService } from "app/services/veiculo.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomePageComponent,
    MotoristasPageComponent,
    VeiculosPageComponent,
    ReservasPageComponent,
    RegistrarPageComponent,
    SairPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [AuthService,MotoristaService,ReservaService,TransportadoraService,VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
