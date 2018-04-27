import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosPizzaComponent } from './graficos-pizza.component';

describe('GraficosPizzaComponent', () => {
  let component: GraficosPizzaComponent;
  let fixture: ComponentFixture<GraficosPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
