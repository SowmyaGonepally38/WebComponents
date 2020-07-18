import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBarComponent } from './my-bar.component';

describe('MyBarComponent', () => {
  let component: MyBarComponent;
  let fixture: ComponentFixture<MyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
