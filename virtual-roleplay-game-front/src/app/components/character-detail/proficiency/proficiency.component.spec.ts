import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyComponent } from './proficiency.component';

describe('ProficiencyComponent', () => {
  let component: ProficiencyComponent;
  let fixture: ComponentFixture<ProficiencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProficiencyComponent]
    });
    fixture = TestBed.createComponent(ProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
