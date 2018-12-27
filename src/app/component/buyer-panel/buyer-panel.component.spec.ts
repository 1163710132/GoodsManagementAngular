import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPanelComponent } from './buyer-panel.component';

describe('BuyerPanelComponent', () => {
  let component: BuyerPanelComponent;
  let fixture: ComponentFixture<BuyerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
