import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanclubComponent } from './fanclub.component';

describe('FanclubComponent', () => {
  let component: FanclubComponent;
  let fixture: ComponentFixture<FanclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
