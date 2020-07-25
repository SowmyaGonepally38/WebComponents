import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDisplayComponent } from './my-display.component';
import { Display } from 'my-display';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';




describe('MyDisplayComponent', () => {
  let component: MyDisplayComponent;
  let fixture: ComponentFixture<MyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDisplayComponent ],
      
      imports:
      [
        MatCardModule,
        MatGridListModule,
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component is  created', () => {
    expect(component).toBeTruthy();
  });
  it('Input is taken correctly',()=>{
    const myinput:Display[]=[
      {
        label:"Sales",
        value:"750",
        color:"#11C1AC",
        fontawesomeicon:"fa fa-shopping-cart fa-2x",
        statusfont:"fa fa-long-arrow-up fa-3x"
    },
    {
        label:"Visitors",
        value:"1,700",
        color:"#20B958",
        fontawesomeicon:"fa fa-eye fa-2x",
        statusfont:"fa fa-long-arrow-up fa-3x"
    }
    ]
    component.displaydata=myinput;
    expect(component.displaydata).toEqual(myinput);
    expect(component.displaydata[0].label).toEqual("Sales");
    expect(component.displaydata[0].value).toEqual("750");
    expect(component.displaydata[1].label).toEqual("Visitors");
    expect(component.displaydata[1].value).toEqual("1,700");
  })
  it('card is displayed as specified',()=>{
   const matcard=fixture.debugElement.query(By.css('.mat-card'));
   const width=matcard.nativeElement.style.width;
   const bgcolor=matcard.nativeElement.style.backgroundColor;
   expect(width).toEqual("600px");
   expect(bgcolor).toEqual("whitesmoke");
  })

});
