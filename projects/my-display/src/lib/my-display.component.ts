import { Component, OnInit, Input } from '@angular/core';
import { Display } from './Display';


@Component({
  selector: 'lib-my-display',
  templateUrl: './my-display.component.html',
  styleUrls: ['./my-display.component.scss']
})
export class MyDisplayComponent implements OnInit {

 @Input()
  public displaydata:Display[];

  constructor() { }

  ngOnInit(): void {
  }

}
