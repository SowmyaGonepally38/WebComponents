import { Component, OnInit } from '@angular/core';
import { AreaChart } from 'projects/my-areachart/src/public-api';
import { AREACONTENT } from '../AreaContent';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  htmlcode=`
  <div id="chart">
    <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [xaxis]="chartOptions.xaxis"
      [stroke]="chartOptions.stroke"
      [colors]="chartOptions.colors"
      [dataLabels]="chartOptions.dataLabels"
    ></apx-chart>
  </div>
  `;
  tscode=`
  //class
  export class AreaChart
  {
    series1:string;
    series2:string;
    data1:any[];
    data2:any[];
    categories:any[];
    title:string;
    colors:string[];
    xaxis:string;
    yaxis:string;
  }


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
  
  `;
  scsscode=``;
  public myareadata:AreaChart=AREACONTENT;
  constructor() { }

  ngOnInit(): void {
  }

}
