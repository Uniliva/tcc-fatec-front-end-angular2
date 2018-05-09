import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashConfigComponent } from './dash-config.component';

describe('DashConfigComponent', () => {
  let component: DashConfigComponent;
  let fixture: ComponentFixture<DashConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
