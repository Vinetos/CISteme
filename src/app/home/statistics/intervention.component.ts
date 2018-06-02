import {Component, OnInit} from '@angular/core';
import {ChartType, LegendItem} from '../../lbd/lbd-chart/lbd-chart.component';

@Component({
  selector: 'app-stats-inter',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  public statsChartType: ChartType;
  public statsChartData: any;
  public statsChartLegendItems: LegendItem[];
  public statsChartOptions: any;

  constructor() {
  }

  ngOnInit() {
    this.statsChartType = ChartType.Pie;
    this.statsChartData = {
      labels: ['73%', '6%', '15%'],
      series: [73, 6, 15],
    };
    this.statsChartOptions = {
      donut: true,
      donutWidth: 50
    };
    this.statsChartLegendItems = [
      {title: 'Secours à personne', imageClass: 'fa fa-circle chartA'},
      {title: 'Incendies', imageClass: 'fa fa-circle chartB'},
      {title: 'Autres', imageClass: 'fa fa-circle chartC'}
    ];

  }

}
