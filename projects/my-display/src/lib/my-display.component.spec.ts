import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDisplayComponent } from './my-display.component';

describe('MyDisplayComponent', () => {
  let component: MyDisplayComponent;
  let fixture: ComponentFixture<MyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
