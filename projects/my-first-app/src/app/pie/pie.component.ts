import { Component, OnInit } from '@angular/core';
import { PIECONTENT } from '../pieContent';
import { Pie } from 'projects/my-pie/src/public-api';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  public mypiecontent:Pie=PIECONTENT;
  htmlcode=`
  
<div id="chart" >
<apx-chart
  [series]="chartOptions.series"
  [chart]="chartOptions.chart"
  [labels]="chartOptions.labels"
  [colors]="chartOptions.colors"
></apx-chart>
</div>

  `;

  tscode=`

  //class
  import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    
  } from "ng-apexcharts";

export class Pie
{
    series: ApexNonAxisChartSeries;
    labels: any;
    colors:string[]
    type:ApexChart["type"];
    width:string;
}

  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: any;
    colors:string[];
    
  };
  
  export class MyPieComponent implements OnInit,OnChanges {
    public chartOptions:ChartOptions;
    @Input()
    public pieContent:Pie;
    constructor() {
    
     }
    ngOnChanges(changes: SimpleChanges): void {
      if (typeof changes["pieContent"] != "undefined") {
      
        this.chartOptions=
      {
        series:this.pieContent.series,
        chart:
          {
            type:this.pieContent.type,
            width:this.pieContent.width
          },
        labels:this.pieContent.labels,
        colors:this.pieContent.colors,
      }
  
    }
  }
     ngOnInit(): void {
    }
  
  `;

  scsscode=`
  .chart {
    max-width: 100px;
    margin: 35px auto;
    padding: 0;
    size: 20px;
  }
  
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
