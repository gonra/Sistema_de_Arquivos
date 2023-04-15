import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDocumentoPorEnderecoComponent } from './total-documento-por-endereco.component';

describe('TotalDocumentoPorEnderecoComponent', () => {
  let component: TotalDocumentoPorEnderecoComponent;
  let fixture: ComponentFixture<TotalDocumentoPorEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDocumentoPorEnderecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDocumentoPorEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
