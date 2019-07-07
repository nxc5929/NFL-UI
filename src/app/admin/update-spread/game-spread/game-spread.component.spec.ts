import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSpreadComponent } from './game-spread.component';

describe('GameSpreadComponent', () => {
  let component: GameSpreadComponent;
  let fixture: ComponentFixture<GameSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
