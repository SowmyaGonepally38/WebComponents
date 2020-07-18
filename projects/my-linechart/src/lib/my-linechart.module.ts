import { NgModule } from '@angular/core';
import { MyLinechartComponent } from './my-linechart.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [MyLinechartComponent],
  imports: [
    NgApexchartsModule
  ],
  exports: [MyLinechartComponent]
})
export class MyLinechartModule { }
