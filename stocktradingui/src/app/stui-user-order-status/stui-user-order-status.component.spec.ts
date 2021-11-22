import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STUIUserOrderStatusComponent } from './stui-user-order-status.component';

describe('STUIUserOrderStatusComponent', () => {
  let component: STUIUserOrderStatusComponent;
  let fixture: ComponentFixture<STUIUserOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STUIUserOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STUIUserOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
