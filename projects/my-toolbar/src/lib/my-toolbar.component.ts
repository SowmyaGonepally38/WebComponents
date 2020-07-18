import { Component, OnInit, Input } from '@angular/core';
import { Toolbar } from './Toolbar';
import { MYTOOLDATA } from './Mytool';


@Component({
  selector: 'lib-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.scss']
  
})
export class MyToolbarComponent implements OnInit {

  @Input()
  public tooldata:Toolbar[]=MYTOOLDATA;

  @Input()
  public appname:string;
  constructor() { }

  ngOnInit(): void {
  }

}
