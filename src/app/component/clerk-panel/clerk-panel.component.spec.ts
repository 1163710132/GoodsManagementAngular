import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkPanelComponent } from './clerk-panel.component';

describe('ClerkPanelComponent', () => {
  let component: ClerkPanelComponent;
  let fixture: ComponentFixture<ClerkPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClerkPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClerkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
