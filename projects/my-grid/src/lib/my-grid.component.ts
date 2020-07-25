import { Component, OnInit, Input } from '@angular/core';
import { Grid } from './Grid';


@Component({
  selector: 'lib-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.scss']
})
export class MyGridComponent implements OnInit {
  setInput(myinput: import("../../../../dist/my-grid/public-api").Grid[]) {
    throw new Error("Method not implemented.");
  }

  @Input()
  public gridContent:Grid[];
  constructor() { }

  ngOnInit(): void {
  }

}
