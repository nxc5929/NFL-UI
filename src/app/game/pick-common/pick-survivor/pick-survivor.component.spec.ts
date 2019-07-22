import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSurvivorComponent } from './pick-survivor.component';

describe('PickSurvivorComponent', () => {
  let component: PickSurvivorComponent;
  let fixture: ComponentFixture<PickSurvivorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickSurvivorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickSurvivorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
