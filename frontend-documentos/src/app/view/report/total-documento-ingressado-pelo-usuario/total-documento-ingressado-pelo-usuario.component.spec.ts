import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDocumentoIngressadoPeloUsuarioComponent } from './total-documento-ingressado-pelo-usuario.component';

describe('TotalDocumentoIngressadoPeloUsuarioComponent', () => {
  let component: TotalDocumentoIngressadoPeloUsuarioComponent;
  let fixture: ComponentFixture<TotalDocumentoIngressadoPeloUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDocumentoIngressadoPeloUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDocumentoIngressadoPeloUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
