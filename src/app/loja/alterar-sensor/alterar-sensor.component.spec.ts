import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarSensorComponent } from './alterar-sensor.component';

describe('AlterarSensorComponent', () => {
  let component: AlterarSensorComponent;
  let fixture: ComponentFixture<AlterarSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
