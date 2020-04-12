import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {

  grafico:any={
    'grafico1':{
     'labels':['Con Frijoles','Con Natilla', 'Con Tocino'],
     'data':[24,30,46],
     'type':'doughnut',
     'leyenda':'El pan se come con'
    },
    'grafico2':{
      'labels':['Hombres','Mujeres'],
      'data':[4500,6000],
      'type':'doughnut',
      'leyenda':'Entrevistados'  
    },
    'grafico3':{
      'labels':['Hombres','Mujeres','homosexuales'],
      'data':[4500,6000,3500],
      'type':'doughnut',
      'leyenda':'Entrevistados cpn gases'  
    },
    'grafico4':{
      'labels':['Hombres','Mujeres','homosexuales','trans'],
      'data':[4500,6000,3500,1200],
      'type':'doughnut',
      'leyenda':'Entrevistados sin gases'  
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
