import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfInventoryComponent } from './shelf-inventory.component';

describe('ShelfInventoryComponent', () => {
  let component: ShelfInventoryComponent;
  let fixture: ComponentFixture<ShelfInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
