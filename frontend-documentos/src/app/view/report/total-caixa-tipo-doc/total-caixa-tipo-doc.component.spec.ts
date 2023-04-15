import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCaixaTipoDocComponent } from './total-caixa-tipo-doc.component';

describe('TotalCaixaTipoDocComponent', () => {
  let component: TotalCaixaTipoDocComponent;
  let fixture: ComponentFixture<TotalCaixaTipoDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCaixaTipoDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCaixaTipoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
