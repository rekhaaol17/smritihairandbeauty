import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrySkinCareComponent } from './dry-skin-care.component';

describe('DrySkinCareComponent', () => {
  let component: DrySkinCareComponent;
  let fixture: ComponentFixture<DrySkinCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrySkinCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrySkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
