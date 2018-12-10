import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSupplyComponent } from './stock-supply.component';

describe('StockSupplyComponent', () => {
  let component: StockSupplyComponent;
  let fixture: ComponentFixture<StockSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
