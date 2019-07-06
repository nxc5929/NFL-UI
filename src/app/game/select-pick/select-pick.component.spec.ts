import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPickComponent } from './select-pick.component';

describe('SelectPickComponent', () => {
  let component: SelectPickComponent;
  let fixture: ComponentFixture<SelectPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
