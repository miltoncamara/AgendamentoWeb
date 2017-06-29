import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomePageComponent,
    MotoristasPageComponent,
    VeiculosPageComponent,
    ReservasPageComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
