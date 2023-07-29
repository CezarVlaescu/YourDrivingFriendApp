import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLeftComponent } from './cover-left.component';

describe('CoverLeftComponent', () => {
  let component: CoverLeftComponent;
  let fixture: ComponentFixture<CoverLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverLeftComponent]
    });
    fixture = TestBed.createComponent(CoverLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
