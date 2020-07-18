import { NgModule } from '@angular/core';
import { MyDisplayComponent } from './my-display.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [MyDisplayComponent],
  imports: [
    MatGridListModule,
    MatCardModule,
    BrowserModule
  ],
  exports: [MyDisplayComponent]
})
export class MyDisplayModule { }
