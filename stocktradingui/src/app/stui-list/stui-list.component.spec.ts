import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STUIListComponent } from './stui-list.component';

describe('STUIListComponent', () => {
  let component: STUIListComponent;
  let fixture: ComponentFixture<STUIListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STUIListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STUIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
