import { NgModule } from '@angular/core';
import { MyWeatherComponent } from './my-weather.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [MyWeatherComponent],
  imports: [
    MatCardModule,
    MatGridListModule
  ],
  exports: [MyWeatherComponent]
})
export class MyWeatherModule { }
