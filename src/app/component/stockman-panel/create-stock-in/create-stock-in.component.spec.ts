import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockInComponent } from './create-stock-in.component';

describe('CreateStockInComponent', () => {
  let component: CreateStockInComponent;
  let fixture: ComponentFixture<CreateStockInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
