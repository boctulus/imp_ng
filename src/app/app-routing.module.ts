import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { HomeComponent } from './static/home/home.component';
import { SomosComponent } from './static/somos/somos.component';


const routes: Routes = [
  {    
    path: 'home', 
    component: AppComponent,
    children: [
        {
            path: '',
            component: NavbarComponent,
            outlet: 'child1'
        },
        {
            path: '',
            component: HomeComponent,
            outlet: 'child2'
        }
    ]
  },
  {    
    path: 'somos', 
    component: AppComponent,
    children: [
        {
            path: '',
            component: NavbarComponent,
            outlet: 'child1'
        },
        {
            path: '',
            component: SomosComponent,
            outlet: 'child2'
        }
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AppComponent, 
    children: [
      {
          path: '',
          component: NavbarComponent,
          outlet: 'child1'
      },
      {
          path: '',
          component: PageNotFoundComponent,
          outlet: 'child2'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }