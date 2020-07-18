import { Component, OnInit } from '@angular/core';
import { Toolbar } from 'projects/my-toolbar/src/public-api';
import { TOOLDATA } from '../Toolbarcontent';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  htmlcode=`
  <mat-toolbar style="background-color: rgb(44, 43, 44);color: white;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
  <span class="fa fa-bars">&nbsp; &nbsp;</span>{{appname}} 
  <div class="toolbar">
  <a mat-button *ngFor="let t of tooldata" style="font-family:'Trebuchet MS';"> 
    <span class={{t.icon}}></span> {{t.label}} &nbsp;&nbsp;&nbsp;&nbsp;
  </a>
  </div>
  <div style="align-items: flex-end;">
 <a mat-button><span flex class="fa fa-user-circle fa-2x"></span></a> 
  </div> 
</mat-toolbar>

`;

tscode=`

//class
export class Toolbar
{
    label:string;
    icon:string;
}


@Input()
public tooldata:Toolbar[]=MYTOOLDATA;

@Input()
public appname:string;
`;

scsscode=`
.toolbar
{
    margin: 0 auto;
    color: white;
    font-size: large;
}

`;
public mytoolbardata:Toolbar[]=TOOLDATA;
public myappname="ADMIRE ADMIN "
  constructor() { }

  ngOnInit(): void {
  }

}
