import { TestBed } from '@angular/core/testing';

import { ProveedorTransporteService } from './proveedor-transporte.service';

describe('ProveedorTransporteService', () => {
  let service: ProveedorTransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorTransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
