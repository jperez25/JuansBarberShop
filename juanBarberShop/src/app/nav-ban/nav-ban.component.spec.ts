import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBanComponent } from './nav-ban.component';

describe('NavBanComponent', () => {
  let component: NavBanComponent;
  let fixture: ComponentFixture<NavBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
