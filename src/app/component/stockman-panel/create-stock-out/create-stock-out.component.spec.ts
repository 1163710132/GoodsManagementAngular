import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockOutComponent } from './create-stock-out.component';

describe('CreateStockOutComponent', () => {
  let component: CreateStockOutComponent;
  let fixture: ComponentFixture<CreateStockOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
