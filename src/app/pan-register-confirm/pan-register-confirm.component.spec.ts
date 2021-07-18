import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanRegisterConfirmComponent } from './pan-register-confirm.component';

describe('PanRegisterConfirmComponent', () => {
  let component: PanRegisterConfirmComponent;
  let fixture: ComponentFixture<PanRegisterConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanRegisterConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanRegisterConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
