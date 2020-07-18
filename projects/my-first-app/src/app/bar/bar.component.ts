import { Component, OnInit } from '@angular/core';
import { Bar } from 'projects/my-bar/src/public-api';
import { BARCONTENT } from '../BarContent';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public mybarcontent:Bar=BARCONTENT;
  htmlcode=`
  <div id="chart">
    <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [dataLabels]="chartOptions.dataLabels"
      [plotOptions]="chartOptions.plotOptions"
      [xaxis]="chartOptions.xaxis"
      [stroke]="chartOptions.stroke"
      [colors]="chartOptions.colors"
    ></apx-chart>
  </div>
  `;

  tscode=`

  //class
  export class Bar
{
    series1:string;
    series2:string;
    data1:any[];
    data2:any[];
    horizontal:boolean;
    width:number;
    axisLabels:any[];
    colors:any[];
}


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
  `;

  scsscode=`
  .chart {
    max-width: 650px;
    margin: 35px auto;
  }
  `;

  
  constructor() { }

  ngOnInit(): void {
  }

}
