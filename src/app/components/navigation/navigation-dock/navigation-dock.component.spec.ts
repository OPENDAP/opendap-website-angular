import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDockComponent } from './navigation-dock.component';

describe('NavigationDockComponent', () => {
  let component: NavigationDockComponent;
  let fixture: ComponentFixture<NavigationDockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationDockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
