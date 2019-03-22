import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class DynamicModule { }
