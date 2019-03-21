import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { HomeComponent } from './static/home/home.component';
import { SomosComponent } from './static/somos/somos.component';
import { LayoutComponent } from './static/layout/layout.component';


const routes: Routes = [
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
      }
    ]
  },
  {
    path: '**', component: LayoutComponent,
    children: [
      {
        path: '',
        component: PageNotFoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
