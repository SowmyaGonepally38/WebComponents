import { Component, OnInit } from '@angular/core';
import { Progress } from 'projects/my-progress/src/public-api';
import { MYPROGRESS } from '../myContent';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  public myprogress:Progress[]=MYPROGRESS;
  htmlcode=`
  <!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>

<mat-card class="inner">
    <mat-card-header>
      <mat-card-title style="font-size: 30px;text-align: center;font-family:'Trebuchet MS';">This Month</mat-card-title>
    </mat-card-header>
    <mat-divider></mat-divider>
    <br>
    <mat-card-content *ngFor="let prog of p">
     
       <h2 style="text-align: left;float: left;font-family:'Trebuchet MS';font-size: large;font-weight: lighter;">{{prog.label}}</h2>
       <h2 style="text-align: right;float: right;font-size: large;font-weight: lighter;">{{prog.percent}}%</h2>
       <mat-progress-bar class="bar" mode="determinate" value={{prog.percent}} color={{prog.color}}></mat-progress-bar>  <br>   </mat-card-content>
      
  </mat-card>


</body>
</html>
  `;

  tscode=`
  //class
  export class Progress
  {
    label:string;
    percent:number;
    color:string;
  }

  @Input()
  public p:Progress[];
  `;

  scsscode=`
  .inner
  {
    width: 350px;
    background-color:white;
  }
 .mat-divider
 {
    border-top-color: whitesmoke;
    border-top-width:thick;
 }
 .bar
 {
    height: 5px;
 }
  `; 
  constructor() { }

  ngOnInit(): void {
  }

}
