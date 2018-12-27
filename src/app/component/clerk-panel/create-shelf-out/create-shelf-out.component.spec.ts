import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShelfOutComponent } from './create-shelf-out.component';

describe('CreateShelfOutComponent', () => {
  let component: CreateShelfOutComponent;
  let fixture: ComponentFixture<CreateShelfOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShelfOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShelfOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
