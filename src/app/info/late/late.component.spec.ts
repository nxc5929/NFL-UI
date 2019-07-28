import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateComponent } from './late.component';

describe('LateComponent', () => {
  let component: LateComponent;
  let fixture: ComponentFixture<LateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
