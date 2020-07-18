import { NgModule } from '@angular/core';
import { MyGridComponent } from './my-grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [MyGridComponent],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [MyGridComponent]
})
export class MyGridModule { }
