import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdharComponent } from './get-adhar.component';

describe('GetAdharComponent', () => {
  let component: GetAdharComponent;
  let fixture: ComponentFixture<GetAdharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
