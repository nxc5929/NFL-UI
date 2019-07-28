import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPicksComponent } from './select-picks.component';

describe('SelectPicksComponent', () => {
  let component: SelectPicksComponent;
  let fixture: ComponentFixture<SelectPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
