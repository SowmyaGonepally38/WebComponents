import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProgressComponent } from './my-progress.component';
import { Progress } from 'my-progress';

describe('MyProgressComponent', () => {
  let component: MyProgressComponent;
  let fixture: ComponentFixture<MyProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component created', () => {
    expect(component).toBeTruthy();
  });
  it('Taking input properly',()=>{
    const myinput:Progress[]=[
      {
        label:'Sales',
        percent:52,
        color:"primary"
    },
    
    {
        label:'Projects',
        percent:80,
        color:"accent"
    }
    ]
    component.p=myinput;
    expect(component.p).toEqual(myinput);
  })
});
