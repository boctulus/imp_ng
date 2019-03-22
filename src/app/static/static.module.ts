import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SomosComponent } from './somos/somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LegalesComponent } from './legales/legales.component';
import { BajaComponent } from './baja/baja.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SomosComponent,
    ServiciosComponent,
    TutorialesComponent,
    ConsultasComponent,
    AyudaComponent,
    RegistroComponent,
    LoginComponent,
    LayoutComponent,
    LegalesComponent,
    BajaComponent,
    PubliciteComponent,
    DenunciasComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class StaticModule { }
