import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAdharComponent } from './enter-adhar.component';

describe('EnterAdharComponent', () => {
  let component: EnterAdharComponent;
  let fixture: ComponentFixture<EnterAdharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterAdharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
