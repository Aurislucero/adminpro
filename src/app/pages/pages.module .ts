import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';



@NgModule({
    declarations:[
  DashboardComponent,
  ProgressComponent,
  Grafica1Component
    ], exports : [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component  
    ]
}) 
export class PagesModule {}
