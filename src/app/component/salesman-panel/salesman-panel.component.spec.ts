import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanPanelComponent } from './salesman-panel.component';

describe('SalesmanPanelComponent', () => {
  let component: SalesmanPanelComponent;
  let fixture: ComponentFixture<SalesmanPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
