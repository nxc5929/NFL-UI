import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameColumnComponent } from './game-column.component';

describe('GameColumnComponent', () => {
  let component: GameColumnComponent;
  let fixture: ComponentFixture<GameColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
