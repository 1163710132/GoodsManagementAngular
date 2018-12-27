import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShelfInComponent } from './create-shelf-in.component';

describe('CreateShelfInComponent', () => {
  let component: CreateShelfInComponent;
  let fixture: ComponentFixture<CreateShelfInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShelfInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShelfInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
