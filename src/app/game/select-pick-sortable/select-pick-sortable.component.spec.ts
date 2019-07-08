import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPickSortableComponent } from './select-pick-sortable.component';

describe('SelectPickSortableComponent', () => {
  let component: SelectPickSortableComponent;
  let fixture: ComponentFixture<SelectPickSortableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPickSortableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPickSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
