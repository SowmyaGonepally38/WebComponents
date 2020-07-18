import { Component, OnInit } from '@angular/core';
import { Display } from 'projects/my-display/src/public-api';
import { DISPLAYDATA } from '../DisplayData';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public mydisplaycontent:Display[]=DISPLAYDATA;
  htmlcode=`
  <div class="display">
    <mat-card style="width:600px;height:fit-content;background-color:whitesmoke">
      <mat-card-header></mat-card-header>
      <mat-card-content>
        <mat-grid-list cols="2" rowHeight="3:1" gutterSize="20px">
          <mat-grid-tile class="list" *ngFor="let e of displaydata" [style.background]="e.color" style="justify-content: left;">
            <div class="inside-grid">
              <span class="icon">
                <i class={{e.fontawesomeicon}} [style.color]="e.color" aria-hidden="true"></i>
              </span>
              <span class="data">
                <span class={{e.statusfont}} style="font-size: xx-large;color: white;float: right;font-weight: lighter;">&nbsp;{{e.value}}</span>
                <br>
                <span style="font-family: 'Trebuchet MS';font-size:large;color: white;font-weight: lighter;">{{e.label}}</span>
              </span>
            </div>
          </mat-grid-tile>
        </mat-grid-list>
      </mat-card-content>
    </mat-card>
  </div>`;

  tscode=`
  //class
  export class Display
  {
    label:string;
    value:string;
    color:string;
    fontawesomeicon:string;
    statusfont:string;
  }

  @Input()
  public displaydata:Display[];
  `;

  scsscode=`
  .inside-grid
{
    position: absolute;
    left:20px;
    align-items: center;
}
.data
{
    position: absolute;
    left: 140px;
}
i.fa
{
    display: inline-block;
    border-radius: 80px;
    box-shadow: 0px 0px 0px;
     padding: 0.5em 0.5em;
     background-color: white;
}
.list
{
    border-radius: 10px;
}
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
