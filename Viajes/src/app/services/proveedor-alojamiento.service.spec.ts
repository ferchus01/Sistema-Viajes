import { TestBed } from '@angular/core/testing';

import { ProveedorAlojamientoService } from './proveedor-alojamiento.service';

describe('ProveedorAlojamientoService', () => {
  let service: ProveedorAlojamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorAlojamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
