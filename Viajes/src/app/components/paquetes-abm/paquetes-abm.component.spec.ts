import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesAbmComponent } from './paquetes-abm.component';

describe('PaquetesAbmComponent', () => {
  let component: PaquetesAbmComponent;
  let fixture: ComponentFixture<PaquetesAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetesAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetesAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
