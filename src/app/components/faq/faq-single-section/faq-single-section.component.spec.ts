import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSingleSectionComponent } from './faq-single-section.component';

describe('FaqSingleSectionComponent', () => {
  let component: FaqSingleSectionComponent;
  let fixture: ComponentFixture<FaqSingleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSingleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSingleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
