import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickHeaderComponent } from './pick-header.component';

describe('PickHeaderComponent', () => {
  let component: PickHeaderComponent;
  let fixture: ComponentFixture<PickHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
