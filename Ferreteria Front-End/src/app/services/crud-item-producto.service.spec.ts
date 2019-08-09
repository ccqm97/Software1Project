import { TestBed } from '@angular/core/testing';

import { CrudItemProductoService } from './crud-item-producto.service';

describe('CrudItemProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudItemProductoService = TestBed.get(CrudItemProductoService);
    expect(service).toBeTruthy();
  });
});
