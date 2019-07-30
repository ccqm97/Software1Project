import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarProveedorComponent } from './mostar-proveedor.component';

describe('MostarProveedorComponent', () => {
  let component: MostarProveedorComponent;
  let fixture: ComponentFixture<MostarProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostarProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
