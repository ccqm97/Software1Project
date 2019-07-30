import { TestBed } from '@angular/core/testing';

import { CrudProveedorService } from './crud-proveedor.service';

describe('CrudProveedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudProveedorService = TestBed.get(CrudProveedorService);
    expect(service).toBeTruthy();
  });
});
