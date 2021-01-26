import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Libreria de terceros
import { ChartsModule } from 'ng2-charts';

// Componentes que usara fuera de pages
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

//Componentes que se encuentran en pages
import { MainPagesComponent } from './main-pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';





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
