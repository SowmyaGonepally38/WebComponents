import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinechartComponent } from './my-linechart.component';

describe('MyLinechartComponent', () => {
  let component: MyLinechartComponent;
  let fixture: ComponentFixture<MyLinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
