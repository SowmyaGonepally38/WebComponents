import { Component, OnInit } from '@angular/core';
import { Grid } from 'projects/my-grid/src/public-api';
import { GRIDCONTENT } from '../GridContent';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public mygridcontent:Grid[]=GRIDCONTENT;
  htmlcode=`
  <div class="my-grid" style="height: 100px;">
<mat-card style="width: fit-content;height: fit-content;background-color:white;" > 
  <mat-card-header></mat-card-header>
  <mat-card-content>
<mat-grid-list cols="2" rowHeight="2:1" gutterSize="5px">
    <mat-grid-tile  *ngFor="let c of gridContent" [style.background]="c.color" class="list">
      <div class="data">
        <p> <span style="font-size:large;font-family:'Trebuchet MS';">{{c.label}}</span>
          <br>
          <span style="font-size:xx-large;">{{c.value}}</span>
        </p>
      </div>
    </mat-grid-tile> 
</mat-grid-list>
</mat-card-content>
</mat-card> 
</div>
  `;
 tscode=`

 //class
 export class Grid
{
    label:string;
    value:string;
    color:string;
}



 @Input()
 public gridContent:Grid[];
 ` ;

scsscode=`
.mat-grid-tile{
   
  padding-left: 0px;
  font-family: cursive;
}
.mat-grid-list
{
  width: 400px;
}
.data
{
  color: white;
  
}
`; 
  constructor() { }

  ngOnInit(): void {
  }

}
