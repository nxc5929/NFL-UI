import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadIndicatorComponent } from './spread-indicator.component';

describe('SpreadIndicatorComponent', () => {
  let component: SpreadIndicatorComponent;
  let fixture: ComponentFixture<SpreadIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
