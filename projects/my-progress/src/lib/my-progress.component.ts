import { Component, OnInit, Input } from '@angular/core';
import { Progress } from './progress';

@Component({
  selector: 'lib-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.scss']
})
export class MyProgressComponent implements OnInit {

  @Input()
  public p:Progress[];
  constructor() { }

  ngOnInit(): void {
  }

}
