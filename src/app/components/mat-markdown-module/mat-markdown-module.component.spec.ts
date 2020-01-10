import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMarkdownModule } from './mat-markdown-module.component';

describe('MatMarkdownModuleComponent', () => {
  let component: MatMarkdownModule;
  let fixture: ComponentFixture<MatMarkdownModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMarkdownModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMarkdownModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
