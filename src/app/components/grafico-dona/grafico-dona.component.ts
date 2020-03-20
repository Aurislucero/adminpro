import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
})
export class GraficoDonaComponent implements OnInit {
 @Input('chartLabels') public doughnutChartLabels: string[] = [];
 @Input('chartData')  public doughnutChartData: number[] = [];
 @Input('chartType')  public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
