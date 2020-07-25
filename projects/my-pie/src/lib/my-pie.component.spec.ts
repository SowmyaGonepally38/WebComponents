import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieComponent } from './my-pie.component';
import { Pie } from 'my-pie';
import { NgApexchartsModule } from 'ng-apexcharts';
import { By } from '@angular/platform-browser';


describe('MyPieComponent', () => {
  let component: MyPieComponent;
  let fixture: ComponentFixture<MyPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieComponent ],
      imports:[NgApexchartsModule]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('component is created', () => {
    expect(component).toBeTruthy();
  });
  it('Input is taken correctly',()=>{
   const testinput:any={
    series: [44, 55, 13, 43, 22],
    labels: ["India", "America", "Switzerland", "Canada", "Paris"],
    type:"donut",
    width:"70%",
    colors:["#0FD332", "#0FC4D3", "#CD0FD3","#D30F1D","#E29910"]
   }
   component.pieContent=testinput;
   expect(component.pieContent).toEqual(testinput);
   expect(component.pieContent.type).toEqual("donut");
   expect(component.pieContent.width).toEqual("70%");
   expect(component.pieContent.labels).toEqual(["India", "America", "Switzerland", "Canada", "Paris"]);
   expect(component.pieContent.series).toEqual([44, 55, 13, 43, 22]);
   expect(component.pieContent.colors).toEqual(["#0FD332", "#0FC4D3", "#CD0FD3","#D30F1D","#E29910"]);
   
  });
 

});
