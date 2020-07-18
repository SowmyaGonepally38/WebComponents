import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pie } from './pie';
import { ApexNonAxisChartSeries, ApexResponsive, ApexPlotOptions, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  colors:string[];
  
};


@Component({
  selector: 'lib-my-pie',
  templateUrl: './my-pie.component.html',
  styleUrls: ['./my-pie.component.scss']
})
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

}
