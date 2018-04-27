import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosBarrasComponent } from './graficos-barras.component';

describe('GraficosBarrasComponent', () => {
  let component: GraficosBarrasComponent;
  let fixture: ComponentFixture<GraficosBarrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosBarrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
