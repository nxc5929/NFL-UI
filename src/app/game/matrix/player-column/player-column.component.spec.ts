import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerColumnComponent } from './player-column.component';

describe('PlayerColumnComponent', () => {
  let component: PlayerColumnComponent;
  let fixture: ComponentFixture<PlayerColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
