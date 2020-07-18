import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
} from "ng-apexcharts";
import { Bar } from './Bar';


export type ChartOptions=
{
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  colors:string[];
};

@Component({
  selector: 'lib-my-bar',
  templateUrl: './my-bar.component.html',
  styleUrls: ['./my-bar.component.scss']
})
export class MyBarComponent implements OnInit,OnChanges {

  @Input()
  public barcontent:Bar;

 public chartOptions:ChartOptions;

  constructor() { 
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes["barcontent"] != "undefined") {

      this.chartOptions=
      {
        series: [
          {
            name: this.barcontent.series1,
            data: this.barcontent.data1  
          },
          {
            name: this.barcontent.series2,
            data: this.barcontent.data2
          }
        ],
  
        chart: {
          type: "bar",
          width: this.barcontent.width,
        },
        colors: this.barcontent.colors,
        plotOptions: {
          bar: {
            horizontal: this.barcontent.horizontal,
             dataLabels: {
              position: "top",
            }
            
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: this.barcontent.axisLabels
        }
      }

  }
}

  ngOnInit(): void {
  }

}
