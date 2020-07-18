import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AreaChart } from './AreaChart';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexMarkers,
  ApexLegend
} from "ng-apexcharts";





export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  colors:string[];
  markers: ApexMarkers;
};

@Component({
  selector: 'lib-my-areachart',
  templateUrl: './my-areachart.component.html',
  styleUrls: ['./my-areachart.component.scss']
})
export class MyAreachartComponent implements OnInit,OnChanges {

  public chartOptions:ChartOptions;

  @Input()
  public areadata:AreaChart;
  
  constructor() { 
    

  }
 
    ngOnChanges(changes: SimpleChanges): void {
      if (typeof changes["areadata"] != "undefined") {
      
        this.chartOptions={
          series:[
            {
              name:this.areadata.series1,
              data:this.areadata.data1
            },
            {
              name:this.areadata.series2,
              data:this.areadata.data2
            }
          ],
          colors:this.areadata.colors,
          chart:
          {
            type:"area",
            width:700,
            height:400
          },
          dataLabels:
          {
            enabled:false
          },
          stroke:
          {
            curve:"straight"
          },
         xaxis:
         {
           categories:this.areadata.categories,
           title:
           {
              text: this.areadata.xaxis
            }
         },
         yaxis:
         {
           title:
           {
             text:this.areadata.yaxis
           }
         },
         markers:
         {
           size:9
         }
    
        };

  }

}
  
  ngOnInit(): void {
  }

}
