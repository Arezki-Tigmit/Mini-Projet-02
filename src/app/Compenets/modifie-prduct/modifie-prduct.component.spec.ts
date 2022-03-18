import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiePrductComponent } from './modifie-prduct.component';

describe('ModifiePrductComponent', () => {
  let component: ModifiePrductComponent;
  let fixture: ComponentFixture<ModifiePrductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiePrductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiePrductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
