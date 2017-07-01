import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MotoristasPageComponent } from './pages/motoristas-page/motoristas-page.component';
import { VeiculosPageComponent } from './pages/veiculos-page/veiculos-page.component';
import { ReservasPageComponent } from './pages/reservas-page/reservas-page.component';
import { RegistrarPageComponent } from './pages/registrar-page/registrar-page.component';
import { SairPageComponent } from './pages/sair-page/sair-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from "app/services/auth.service";

const appRoutes: Routes = [
    { path: '', canActivate: [AuthService], component: HomePageComponent },
    { path: 'home', canActivate: [AuthService], component: HomePageComponent },
    { path: 'motoristas', canActivate: [AuthService], component: MotoristasPageComponent },
    { path: 'veiculos', canActivate: [AuthService], component: VeiculosPageComponent },
    { path: 'reservas', canActivate: [AuthService], component: ReservasPageComponent },    
    { path: 'sair', canActivate: [AuthService], component: SairPageComponent },
    { path: 'registrar', component: RegistrarPageComponent },
    { path: 'login', component: LoginPageComponent }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);