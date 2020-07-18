import { Component } from '@angular/core';
import { MYPROGRESS } from './myContent';
import { Progress } from 'projects/my-progress/src/public-api';
import { PIECONTENT } from './pieContent';
import { Pie } from 'projects/my-pie/src/public-api';

import { GRIDCONTENT } from './GridContent';
import { BARCONTENT } from './BarContent';
import { Bar } from 'projects/my-bar/src/public-api';
import { Grid } from 'projects/my-grid/src/public-api';
import { Display } from 'projects/my-display/src/public-api';
import { DISPLAYDATA } from './DisplayData';

import { TOOLDATA } from './Toolbarcontent';
import { Toolbar } from 'projects/my-toolbar/src/public-api';
import { MyTable } from 'table';
import { TABLECONTENT } from './TableContent';
import { Linechart } from 'projects/my-linechart/src/public-api';
import { LINECONTENT } from './LineContent';
import { AreaChart } from 'projects/my-areachart/src/public-api';
import { AREACONTENT } from './AreaContent';
import { Weather } from 'my-weather';
import { WEATHERCONTENT } from './WeatherContent';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'my-first-app';
  public myprogress:Progress[]=MYPROGRESS;
  public mypiecontent:Pie=PIECONTENT;
  public mygridcontent:Grid[]=GRIDCONTENT;
  public mybarcontent:Bar=BARCONTENT;
  public mydisplaycontent:Display[]=DISPLAYDATA;
  public mytoolbardata:Toolbar[]=TOOLDATA;
  public myappname:string="ADMIRE ADMIN "
  public mytabledata:MyTable[]=TABLECONTENT;
  public myrows:number=5;
  public mylinedata:Linechart=LINECONTENT;
  public myareadata:AreaChart=AREACONTENT;
  public myweatherdata:Weather=WEATHERCONTENT;

 

  
 
}
