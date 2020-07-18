import { NgModule } from '@angular/core';
import { MyBarComponent } from './my-bar.component';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [MyBarComponent],
  imports: [
    NgApexchartsModule 
  ],
  exports: [MyBarComponent]
})
export class MyBarModule { }
