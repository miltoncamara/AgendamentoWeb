import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MotoristasPageComponent } from './pages/motoristas-page/motoristas-page.component';
import { VeiculosPageComponent } from './pages/veiculos-page/veiculos-page.component';
import { ReservasPageComponent } from './pages/reservas-page/reservas-page.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'motoristas', component: MotoristasPageComponent },
    { path: 'veiculos', component: VeiculosPageComponent },
    { path: 'reservas', component: ReservasPageComponent }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);