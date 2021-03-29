import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveSkinCareComponent } from './sensitive-skin-care.component';

describe('SensitiveSkinCareComponent', () => {
  let component: SensitiveSkinCareComponent;
  let fixture: ComponentFixture<SensitiveSkinCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensitiveSkinCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitiveSkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
