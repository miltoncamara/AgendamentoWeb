import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing, RoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

// Components
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { SairComponent } from './components/sair/sair.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { AuthService } from "./services/auth.service";
import { TransportadoraService } from "./services/transportadora.service";
import { PeriodoService } from "./services/periodo.service";

// Modules
import { MotoristaModule } from "./components/motoristas/motorista.module";
import { VeiculoModule } from "./components/veiculos/veiculo.module";
import { ReservaModule } from "./components/reservas/reserva.module";

// Shared
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,        
    RegistroComponent,
    HomeComponent,
    SairComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    MotoristaModule,
    VeiculoModule,
    ReservaModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService, TransportadoraService, PeriodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
