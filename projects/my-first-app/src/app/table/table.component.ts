import { Component, OnInit } from '@angular/core';
import { TABLECONTENT } from '../TableContent';
import { MyTable } from 'projects/table/src/public-api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public mytabledata:MyTable[]=TABLECONTENT;
  htmlcode=`
  <table class="table table-striped" >
  <thead style="background-color: rgb(15, 15, 66);color: white;font-family:'Trebuchet MS';">
      <tr>
          <th scope="col" *ngFor="let td of tabledata" style="text-align: center;">{{td.name}}</th>
      </tr>
  </thead>
  <tbody>
            <ng-container *ngFor="let k of count">
              <tr>
                      <ng-container *ngFor="let data of tabledata">
                      <td style="font-family: 'Trebuchet MS';">{{data.value[k]}}</td>
                       </ng-container>   
              </tr>
            </ng-container>
      
  </tbody>
</table>

  `;

  tscode=`

  //class

export class MyTable
{
    name:string;
    value:any[];
}


  @Input()
  public tabledata:MyTable[];
  
  @Input()
  public rows:number;  

  `;

  scsscode=`
.table
{
    width: 700px;
    .th,td
    {
        text-align:center;
    }
}
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
