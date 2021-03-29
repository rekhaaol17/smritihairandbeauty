import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationSkinCareComponent } from './combination-skin-care.component';

describe('CombinationSkinCareComponent', () => {
  let component: CombinationSkinCareComponent;
  let fixture: ComponentFixture<CombinationSkinCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationSkinCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationSkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
