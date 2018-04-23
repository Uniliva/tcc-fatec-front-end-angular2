import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLojaComponent } from './dash-loja.component';

describe('DashLojaComponent', () => {
  let component: DashLojaComponent;
  let fixture: ComponentFixture<DashLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
