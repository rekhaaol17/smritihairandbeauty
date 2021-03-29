import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilySkinCareComponent } from './oily-skin-care.component';

describe('OilySkinCareComponent', () => {
  let component: OilySkinCareComponent;
  let fixture: ComponentFixture<OilySkinCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilySkinCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OilySkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
