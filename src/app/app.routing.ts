import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { ListaMotoristasComponent } from './components/lista-motoristas/lista-motoristas.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { ListaVeiculosComponent } from "app/components/lista-veiculos/lista-veiculos.component";
import { ReservasComponent } from './components/reservas/reservas.component';
import { ListaReservasComponent } from "app/components/lista-reservas/lista-reservas.component";
import { RegistroComponent } from './components/registro/registro.component';
import { SairComponent } from './components/sair/sair.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from "app/services/auth.service";

const appRoutes: Routes = [
    { path: '', canActivate: [AuthService], component: HomeComponent },
    { path: 'home', canActivate: [AuthService], component: HomeComponent },
    { path: 'motoristas', canActivate: [AuthService], component: MotoristasComponent },
    { path: 'motoristas/lista', canActivate: [AuthService], component: ListaMotoristasComponent },
    { path: 'veiculos', canActivate: [AuthService], component: VeiculosComponent },
    { path: 'veiculos/lista', canActivate: [AuthService], component: ListaVeiculosComponent },
    { path: 'reservas', canActivate: [AuthService], component: ReservasComponent },
    { path: 'reservas/lista', canActivate: [AuthService], component: ListaReservasComponent },
    { path: 'sair', canActivate: [AuthService], component: SairComponent },
    { path: 'registrar', component: RegistroComponent },
    { path: 'login', component: LoginComponent }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);