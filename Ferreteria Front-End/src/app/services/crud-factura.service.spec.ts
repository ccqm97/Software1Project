import { TestBed } from '@angular/core/testing';

import { CrudFacturaService } from './crud-factura.service';

describe('CrudFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudFacturaService = TestBed.get(CrudFacturaService);
    expect(service).toBeTruthy();
  });
});
