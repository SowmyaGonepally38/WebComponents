import { NgModule } from '@angular/core';
import { MyProgressComponent } from './my-progress.component';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [MyProgressComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  exports: [MyProgressComponent]
})
export class MyProgressModule { }
