import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeatherComponent } from './my-weather.component';

describe('MyWeatherComponent', () => {
  let component: MyWeatherComponent;
  let fixture: ComponentFixture<MyWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
