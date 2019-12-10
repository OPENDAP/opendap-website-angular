import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilerplateEditorComponent } from './boilerplate-editor.component';

describe('BoilerplateEditorComponent', () => {
  let component: BoilerplateEditorComponent;
  let fixture: ComponentFixture<BoilerplateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerplateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoilerplateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
