import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableGameComponent } from './sortable-game.component';

describe('SortableGameComponent', () => {
  let component: SortableGameComponent;
  let fixture: ComponentFixture<SortableGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
