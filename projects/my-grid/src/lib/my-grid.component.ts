import { Component, OnInit, Input } from '@angular/core';
import { Grid } from './Grid';


@Component({
  selector: 'lib-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.scss']
})
export class MyGridComponent implements OnInit {

  @Input()
  public gridContent:Grid[];
  constructor() { }

  ngOnInit(): void {
  }

}
