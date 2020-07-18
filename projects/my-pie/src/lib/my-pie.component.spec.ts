import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieComponent } from './my-pie.component';

describe('MyPieComponent', () => {
  let component: MyPieComponent;
  let fixture: ComponentFixture<MyPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
