import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserLoggedComponent } from './edit-user-logged.component';

describe('EditUserLoggedComponent', () => {
  let component: EditUserLoggedComponent;
  let fixture: ComponentFixture<EditUserLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserLoggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
