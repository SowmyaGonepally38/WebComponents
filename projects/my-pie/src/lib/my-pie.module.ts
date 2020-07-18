import { NgModule } from '@angular/core';
import { MyPieComponent } from './my-pie.component';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [MyPieComponent],
  imports: [
    BrowserModule,
    NgApexchartsModule
  ],
  exports: [MyPieComponent]
})
export class MyPieModule { }
