import { Component, OnInit } from '@angular/core';
import { Linechart } from 'projects/my-linechart/src/public-api';
import { LINECONTENT } from '../LineContent';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  htmlcode=`
  
<div id="chart">
<apx-chart
  [series]="chartOptions.series"
  [chart]="chartOptions.chart"
  [xaxis]="chartOptions.xaxis"
  [stroke]="chartOptions.stroke"
  [colors]="chartOptions.colors"
  [dataLabels]="chartOptions.dataLabels"
  [legend]="chartOptions.legend"
  [markers]="chartOptions.markers"
  [yaxis]="chartOptions.yaxis"
  [title]="chartOptions.title"
></apx-chart>
</div>


  `;
  tscode=`
  //class
export class Linechart
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
  `;
  scsscode=`
  .chart {
    width: 700px;
  }
 `;

 public mylinedata:Linechart=LINECONTENT;
  constructor() { }

  ngOnInit(): void {
  }

}
