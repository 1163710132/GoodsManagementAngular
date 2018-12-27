import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmanPanelComponent } from './stockman-panel.component';

describe('StockmanPanelComponent', () => {
  let component: StockmanPanelComponent;
  let fixture: ComponentFixture<StockmanPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmanPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmanPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
