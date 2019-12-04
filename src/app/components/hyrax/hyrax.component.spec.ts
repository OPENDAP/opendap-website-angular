import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyraxComponent } from './hyrax.component';

describe('HyraxComponent', () => {
  let component: HyraxComponent;
  let fixture: ComponentFixture<HyraxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyraxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyraxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
