import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverRightComponent } from './cover-right.component';

describe('CoverRightComponent', () => {
  let component: CoverRightComponent;
  let fixture: ComponentFixture<CoverRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverRightComponent]
    });
    fixture = TestBed.createComponent(CoverRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
