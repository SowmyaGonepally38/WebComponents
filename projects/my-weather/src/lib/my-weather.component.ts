import { Component, OnInit, Input } from '@angular/core';

import { Weather } from './Weather';

@Component({
  selector: 'lib-my-weather',
  templateUrl: './my-weather.component.html',
  styleUrls: ['./my-weather.component.scss']
})
export class MyWeatherComponent implements OnInit {

  @Input()
  public weatherdata:Weather;
  constructor() { }

  ngOnInit(): void {
  }

}
