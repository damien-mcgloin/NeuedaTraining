import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STUISellComponent } from './stui-sell.component';

describe('STUISellComponent', () => {
  let component: STUISellComponent;
  let fixture: ComponentFixture<STUISellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STUISellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STUISellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
