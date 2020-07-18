import { NgModule } from '@angular/core';
import { MyToolbarComponent } from './my-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [MyToolbarComponent],
  imports: [
    MatToolbarModule,
    BrowserModule,
    CommonModule,
    
  ],
  exports: [MyToolbarComponent]
})
export class MyToolbarModule { }
