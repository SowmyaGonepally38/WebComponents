import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAreachartComponent } from './my-areachart.component';

describe('MyAreachartComponent', () => {
  let component: MyAreachartComponent;
  let fixture: ComponentFixture<MyAreachartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAreachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAreachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component is  created', () => {
    expect(component).toBeTruthy();
  });
  it('Input is taken correctly',()=>{
    const testinput:any={
    series1:"Likes",
    series2:"Comments",
    data1:[80,90,60,70,90,70,80,90,120,130,110,100],
    data2:[40,30,40,50,60,40,60,70,80,70,70,80],
    categories:["Jan","Feb","March","April","May","June","July","August","September","October","November","December"],
    title:"Statistics",
    colors:["#2071F7","#57F2B7"],
    xaxis:"Month",
    yaxis:"Values"
    }
    component.areadata=testinput;
    expect(component.areadata).toEqual(testinput);
    expect(component.areadata.series1).toEqual("Likes");
    expect(component.areadata.series2).toEqual("Comments");
    expect(component.areadata.title).toEqual("Statistics");
    expect(component.areadata.data1).toEqual([80,90,60,70,90,70,80,90,120,130,110,100]);
    expect(component.areadata.data2).toEqual([40,30,40,50,60,40,60,70,80,70,70,80]);
    
    
  })
});
