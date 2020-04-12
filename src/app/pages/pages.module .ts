import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import {FormsModule} from '@angular/forms'

import { SharedModule } from '../shared/shared.module'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ChartsModule } from 'ng2-charts';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';




@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
   exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
  ],
  imports: [
    ChartsModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
  ]
})
export class PagesModule { }
