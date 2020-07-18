import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyProgressModule } from 'projects/my-progress/src/public-api';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { MyPieModule } from 'projects/my-pie/src/public-api';
import { MyGridModule } from 'projects/my-grid/src/public-api';
import { MyBarModule } from 'projects/my-bar/src/public-api';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyDisplayModule } from 'projects/my-display/src/public-api';
import { MatGridListModule } from '@angular/material/grid-list';
import { MyToolbarModule } from 'projects/my-toolbar/src/public-api';
import { CommonModule } from '@angular/common';
import { TableModule } from 'projects/table/src/public-api';
import { MyLinechartModule } from 'projects/my-linechart/src/public-api';
import { MyAreachartModule } from 'projects/my-areachart/src/public-api';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MyWeatherModule } from 'projects/my-weather/src/public-api';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { GridComponent } from './grid/grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WeatherComponent } from './weather/weather.component';
import { DisplayComponent } from './display/display.component';
import { AreaComponent } from './area/area.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
    HomeComponent,
    TableComponent,
    LineComponent,
    PieComponent,
    BarComponent,
    ToolbarComponent,
    WeatherComponent,
    DisplayComponent,
    AreaComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyProgressModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MyPieModule,
    MyGridModule,
    MyBarModule,
    NgApexchartsModule,
    MyDisplayModule,
    MatGridListModule,
    MyToolbarModule,
    CommonModule,
    TableModule,
    MyLinechartModule,
    MyAreachartModule,
    MatSelectModule,
    MatFormFieldModule,
    MyWeatherModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    BrowserAnimationsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
