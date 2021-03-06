import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbersComponent } from './barbers.component';

describe('BarbersComponent', () => {
  let component: BarbersComponent;
  let fixture: ComponentFixture<BarbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
