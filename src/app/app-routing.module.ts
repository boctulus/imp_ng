import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P404Component } from './static/p404/p404.component';
import { LayoutComponent } from './static/layout/layout.component';
import { HomeComponent } from './static/home/home.component';
import { SomosComponent } from './static/somos/somos.component';
import { ServiciosComponent } from './static/servicios/servicios.component';
import { TutorialesComponent } from './static/tutoriales/tutoriales.component';
import { ConsultasComponent } from './static/consultas/consultas.component';
import { AyudaComponent } from './static/ayuda/ayuda.component';
import { RegistroComponent } from './static/registro/registro.component';
import { LoginComponent } from './static/login/login.component';
import { PubliciteComponent } from './static/publicite/publicite.component';
import { DenunciasComponent } from './static/denuncias/denuncias.component';
import { LegalesComponent } from './static/legales/legales.component';
import { BajaComponent } from './static/baja/baja.component';



const routes: Routes = [
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'somos',
        component: SomosComponent,
      },
      {
        path: 'servicios',
        component: ServiciosComponent,
      },
      {
        path: 'tutoriales',
        component: TutorialesComponent,
      },
      {
        path: 'consultas',
        component: ConsultasComponent,
      },
      {
        path: 'ayuda',
        component: AyudaComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'publicite',
        component: PubliciteComponent,
      },
      {
        path: 'denuncias',
        component: DenunciasComponent,
      },
      {
        path: 'legales',
        component: LegalesComponent,
      },
      {
        path: 'baja',
        component: BajaComponent,
      }
    ]
  },
  
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '**', component: LayoutComponent,
    children: [
      {
        path: '',
        component: P404Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
