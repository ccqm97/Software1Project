import { TestBed } from '@angular/core/testing';

import { CrudItemsFacturaService } from './crud-items-factura.service';

describe('CrudItemsFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudItemsFacturaService = TestBed.get(CrudItemsFacturaService);
    expect(service).toBeTruthy();
  });
});
