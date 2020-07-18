import { Component, OnInit } from '@angular/core';
import { Weather } from 'projects/my-weather/src/public-api';
import { WEATHERCONTENT } from '../WeatherContent';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public myweatherdata:Weather=WEATHERCONTENT;
  htmlcode=`
  <mat-card style="background-color:darkturquoise;width: 700px;height: 300px;margin-left: 20px;">
    <mat-card-header></mat-card-header>
    <mat-card-content>
        <div class="upper">
            <br>
            <img src={{weatherdata.overall}} style="justify-content: left;padding-left: 15px;">
            <h2 style="float: right;color: white;font-family: 'Trebuchet MS';font-size: 80px;">{{weatherdata.temperature}} <span class="fa fa-map-marker" style="font-size:20px;">&nbsp;{{weatherdata.place}}</span></h2>
            <br><br>
        </div>
        <div class="lower">
            <br><br>
            <mat-grid-list cols="4" rowHeight="2:1" gutterSize="0px" style="color:white;">
                <mat-grid-tile>
                    <div>
                    <img src={{weatherdata.day1}}>&nbsp;
                    <p>Mon &nbsp; {{weatherdata.temp1}}</p>
                    </div>
                </mat-grid-tile>
                <mat-grid-tile>
                    <div>
                    <img src={{weatherdata.day2}}>&nbsp;
                    <p>Tue &nbsp; {{weatherdata.temp2}}</p>
                    </div>
                </mat-grid-tile>
                <mat-grid-tile>
                    <div>
                    <img src={{weatherdata.day3}}>&nbsp;
                    <p>Wed &nbsp; {{weatherdata.temp3}}</p>
                    </div>
                </mat-grid-tile>
                <mat-grid-tile>
                    <div>
                    <img src={{weatherdata.day4}}>&nbsp;
                    <p>Thurs &nbsp; {{weatherdata.temp4}}</p>
                    </div>
                </mat-grid-tile>

            </mat-grid-list>
           

        </div>
    </mat-card-content>
</mat-card>
  `;

  tscode=`
  //class
  export class Weather
{
    place:string;
    temperature:string;
    overall:string;
    day1:string;
    temp1:string;
    day2:string;
    temp2:string;
    day3:string;
    temp3:string;
    day4:string;
    temp4:string;
}


  @Input()
  public weatherdata:Weather;
  `;

  scsscode=`
  
  `
  constructor() { }

  ngOnInit(): void {
  }

}
