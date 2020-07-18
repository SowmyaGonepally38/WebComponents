import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TableComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
