import { TestBed } from '@angular/core/testing';

import { CrudProductoService } from './crud-producto.service';

describe('CrudProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudProductoService = TestBed.get(CrudProductoService);
    expect(service).toBeTruthy();
  });
});
