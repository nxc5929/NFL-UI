import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPickStandardComponent } from './select-pick-standard.component';

describe('SelectPickComponent', () => {
  let component: SelectPickStandardComponent;
  let fixture: ComponentFixture<SelectPickStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPickStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPickStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
