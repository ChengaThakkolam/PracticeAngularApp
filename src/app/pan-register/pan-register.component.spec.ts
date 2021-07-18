import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanRegisterComponent } from './pan-register.component';

describe('PanRegisterComponent', () => {
  let component: PanRegisterComponent;
  let fixture: ComponentFixture<PanRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
