import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDetalhesComponent } from './sensor-detalhes.component';

describe('SensorDetalhesComponent', () => {
  let component: SensorDetalhesComponent;
  let fixture: ComponentFixture<SensorDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
