import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToolbarComponent } from './my-toolbar.component';

describe('MyToolbarComponent', () => {
  let component: MyToolbarComponent;
  let fixture: ComponentFixture<MyToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
