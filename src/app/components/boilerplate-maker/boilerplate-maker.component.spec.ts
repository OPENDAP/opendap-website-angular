import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilerplateMakerComponent } from './boilerplate-maker.component';

describe('BoilerplateMakerComponent', () => {
  let component: BoilerplateMakerComponent;
  let fixture: ComponentFixture<BoilerplateMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerplateMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoilerplateMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
