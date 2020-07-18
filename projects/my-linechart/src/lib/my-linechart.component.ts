import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import { Linechart } from './Linechart';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'lib-my-linechart',
  templateUrl: './my-linechart.component.html',
  styleUrls: ['./my-linechart.component.scss']
})
export class MyLinechartComponent implements OnInit,OnChanges {

  public chartOptions:ChartOptions;

  @Input()
  public linedata:Linechart;
  constructor() { 

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes["linedata"] != "undefined") {
    
      this.chartOptions={
        series:[
          {
            name:this.linedata.series1,
            data:this.linedata.data1
          },
          {
           name:this.linedata.series2,
           data:this.linedata.data2
          }
        ],
        chart:
        {
          type:"line",
          height:400,
          width:700,
          toolbar:
          {
             show:false
          } 
        },
        colors:this.linedata.colors,
        dataLabels:{
          enabled:false
        },
        stroke:
        {
          curve:"straight"
        },
        title:
        {
          text:this.linedata.title,
          align:"center",
        },
        markers:
        {
          size:8
        },
        xaxis:
        {
           categories:this.linedata.categories,
           title:
           {
             text:this.linedata.xaxis
           }
  
        },
        yaxis:
        {
            title:
            {
              text:this.linedata.yaxis
            }
        },
        legend:
        {
          position:"top",
          horizontalAlign:"right",
          floating:true,
          offsetY: -25,
          offsetX: -5
        }
        
      };

    }

  }

  ngOnInit(): void {

  }

}
