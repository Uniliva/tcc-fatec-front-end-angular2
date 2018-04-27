import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosLinhaComponent } from './graficos-linha.component';

describe('GraficosLinhaComponent', () => {
  let component: GraficosLinhaComponent;
  let fixture: ComponentFixture<GraficosLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
