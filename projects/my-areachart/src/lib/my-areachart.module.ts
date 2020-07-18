import { NgModule } from '@angular/core';
import { MyAreachartComponent } from './my-areachart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [MyAreachartComponent],
  imports: [
    NgApexchartsModule,
    BrowserModule
  ],
  exports: [MyAreachartComponent]
})
export class MyAreachartModule { }
