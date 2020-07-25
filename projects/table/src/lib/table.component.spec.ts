import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MyTable } from 'table';



describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component is created', () => {
    expect(component).toBeTruthy();
  });
  it('Input is taken correctly',()=>{
    const myinput:MyTable[]=[
      {
        name:"Sno",
        value:[1,2,3,4,5]
      },
      {
        name:"Cost",
        value:[100,200,300,400,500]
      }
    ]
    component.tabledata=myinput;
    expect(component.tabledata).toEqual(myinput);
    expect(component.tabledata[0].value).toEqual([1,2,3,4,5])
  })
  it('color of the table is displayed as specified',()=>{
    const thead:HTMLElement=fixture.nativeElement.querySelector('thead');
    const color=thead.style.backgroundColor;
    expect(color).toEqual("rgb(15, 15, 66)");
  })
  it('striped table is displayed',()=>{
    const table:HTMLElement=fixture.nativeElement.querySelector('table');
    const classval=table.className;
    expect(classval).toEqual("table table-striped");
  })
  it('font is displayed as specified',()=>{
    const thead:HTMLElement=fixture.nativeElement.querySelector('thead');
    const theadfont=thead.style.fontFamily
    expect(theadfont).toEqual('"Trebuchet MS"');
  })
});
