import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MotoristasComponent } from './components/motoristas/motoristas-cadastro/motoristas.component';
import { MotoristasListaComponent } from './components/motoristas/motoristas-lista/motoristas-lista.component';
import { VeiculosComponent } from 'app/components/veiculos/veiculos-cadastro/veiculos.component';
import { VeiculosListaComponent } from "app/components/veiculos/veiculos-lista/veiculos-lista.component";
import { ReservasComponent } from 'app/components/reservas/reservas-cadastro/reservas.component';
import { ReservasListaComponent } from "app/components/reservas/reservas-lista/reservas-lista.component";
import { RegistroComponent } from './components/registro/registro.component';
import { SairComponent } from './components/sair/sair.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from "app/services/auth.service";

const appRoutes: Routes = [
    { path: '', canActivate: [AuthService], component: HomeComponent },
    { path: 'home', canActivate: [AuthService], component: HomeComponent },
    { path: 'motoristas', canActivate: [AuthService], component: MotoristasComponent },
    { path: 'motoristas/lista', canActivate: [AuthService], component: MotoristasListaComponent },
    { path: 'veiculos', canActivate: [AuthService], component: VeiculosComponent },
    { path: 'veiculos/lista', canActivate: [AuthService], component: VeiculosListaComponent },
    { path: 'reservas', canActivate: [AuthService], component: ReservasComponent },
    { path: 'reservas/lista', canActivate: [AuthService], component: ReservasListaComponent },
    { path: 'sair', canActivate: [AuthService], component: SairComponent },
    { path: 'registrar', component: RegistroComponent },
    { path: 'login', component: LoginComponent }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);