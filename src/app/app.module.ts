import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import bootstrap from "bootstrap";

import { AppComponent } from './app.component';
import { LayoutComponent } from './static/layout/layout.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { FooterComponent } from './static/footer/footer.component';
import { HomeComponent } from './static/home/home.component';
import { SomosComponent } from './static/somos/somos.component';
import { P404Component } from './static/p404/p404.component';
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
import { SliderComponent } from './shared/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    P404Component,
    HomeComponent,
    SomosComponent,
    ServiciosComponent,
    TutorialesComponent,
    ConsultasComponent,
    PubliciteComponent,
    DenunciasComponent,
    AyudaComponent,
    RegistroComponent,
    LoginComponent,
    LegalesComponent,
    BajaComponent,
    SliderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
