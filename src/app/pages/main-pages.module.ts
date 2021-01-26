import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';

import { MainPagesComponent } from './main-pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MainPagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
    
  ],
  imports: [ CommonModule, FormsModule, RouterModule, SharedModule, ComponentsModule ],
  exports:[
    MainPagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
  ]
})
export class MainPagesModule { }
