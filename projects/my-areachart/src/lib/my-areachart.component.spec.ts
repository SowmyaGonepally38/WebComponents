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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
