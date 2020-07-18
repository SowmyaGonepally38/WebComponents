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