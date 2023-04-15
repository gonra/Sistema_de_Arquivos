import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent } from './total-documento-ingressado-por-usuario-por-tipo-doc.component';

describe('TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent', () => {
  let component: TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent;
  let fixture: ComponentFixture<TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDocumentoIngressadoPorUsuarioPorTipoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
