import {Routes} from '@angular/router';
import { GridComponent } from '../grid/grid.component';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { TableComponent } from '../table/table.component';
import { LineComponent } from '../line/line.component';
import { PieComponent } from '../pie/pie.component';
import { BarComponent } from '../bar/bar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { WeatherComponent } from '../weather/weather.component';
import { DisplayComponent } from '../display/display.component';
import { AreaComponent } from '../area/area.component';
import { ProgressComponent } from '../progress/progress.component';



export const routes:Routes=[
{ path :'grid' , component: GridComponent},
{ path:'home', component:HomeComponent},
{ path:'table', component:TableComponent},
{ path:'line',component:LineComponent},
{ path:'pie',component:PieComponent},
{ path:'bar',component:BarComponent},
{path:'toolbar',component:ToolbarComponent},
{ path:'weather',component:WeatherComponent},
{path:'display',component:DisplayComponent},
{path:'area',component:AreaComponent},
{path:'progress',component:ProgressComponent},
{path: '', redirectTo: '/home', pathMatch: 'full' }

]