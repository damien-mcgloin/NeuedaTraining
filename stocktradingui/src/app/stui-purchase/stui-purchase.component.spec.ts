import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STUIPurchaseComponent } from './stui-purchase.component';

describe('STUIPurchaseComponent', () => {
  let component: STUIPurchaseComponent;
  let fixture: ComponentFixture<STUIPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STUIPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STUIPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
