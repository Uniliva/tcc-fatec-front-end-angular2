import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRelatorioComponent } from './dash-relatorio.component';

describe('DashRelatorioComponent', () => {
  let component: DashRelatorioComponent;
  let fixture: ComponentFixture<DashRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashRelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
