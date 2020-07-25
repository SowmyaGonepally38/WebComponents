import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridComponent } from './my-grid.component';
import { Grid } from 'my-grid';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

describe('MyGridComponent', () => {
  let component: MyGridComponent;
  let fixture: ComponentFixture<MyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGridComponent ],
      imports:
      [
        MatCardModule,
        MatGridListModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component is created', () => {
    expect(component).toBeTruthy();
  });

  it('Input is taken correctly',()=>{
    const myinput:Grid[]=[
      {
        label:"Space",
        value:"100",
        color:"#BC3994"
      },
      {
        label:"Time",
        value:"80",
        color:"#BC3994"
      },
      {
        label:"Mind",
        value:"200",
        color:"#BC3994"
      },
      {
        label:"Soul",
        value:"180",
        color:"#BC3994"
      }
    ]
    component.gridContent=myinput;
    fixture.detectChanges();
    expect(component.gridContent).toEqual(myinput);
    expect(component.gridContent[0].label).toEqual("Space");
    expect(component.gridContent[1].label).toEqual("Time");
    expect(component.gridContent[2].label).toEqual("Mind");
    expect(component.gridContent[3].label).toEqual("Soul");
    expect(component.gridContent.length).toEqual(4);
  })
  it('height is displayed as specified',()=>{
    const div:HTMLElement=fixture.nativeElement.querySelector('div');
    const h=div.style.height;
    expect(h).toEqual("100px");
  })
  it('card dimensions are displayed as specified',()=>{
    const card=fixture.debugElement.query(By.css('.mat-card'));
    const h=card.nativeElement.style.height;
    const w=card.nativeElement.style.width;
    expect(h).toEqual("fit-content");
    expect(w).toEqual("fit-content");
  })
  

});
