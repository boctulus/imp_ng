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
  ],
  imports: [ 
    CommonModule 
  ]
})
export class StaticModule { }
 