import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanStatusComponent } from './pan-status.component';

describe('PanStatusComponent', () => {
  let component: PanStatusComponent;
  let fixture: ComponentFixture<PanStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
