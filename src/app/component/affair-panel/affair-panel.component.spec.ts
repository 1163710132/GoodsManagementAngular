import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairPanelComponent } from './affair-panel.component';

describe('AffairCompoentComponent', () => {
  let component: AffairPanelComponent;
  let fixture: ComponentFixture<AffairPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffairPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
