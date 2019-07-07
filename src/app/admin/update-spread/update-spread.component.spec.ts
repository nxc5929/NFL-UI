import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpreadComponent } from './update-spread.component';

describe('UpdateSpreadComponent', () => {
  let component: UpdateSpreadComponent;
  let fixture: ComponentFixture<UpdateSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
