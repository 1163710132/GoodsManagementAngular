import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfManageComponent } from './shelf-manage.component';

describe('ShelfManageComponent', () => {
  let component: ShelfManageComponent;
  let fixture: ComponentFixture<ShelfManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
