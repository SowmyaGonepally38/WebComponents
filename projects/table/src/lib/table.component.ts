import { Component, OnInit, Input } from '@angular/core';
import { MyTable } from './MyTable';


@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

@Input()
  public tabledata:MyTable[];
  
@Input()
  public rows:number;  

  public count:number[]=[0,1,2,3,4];
  

  constructor() {
  
  
   }

  ngOnInit(): void {
  }

}
