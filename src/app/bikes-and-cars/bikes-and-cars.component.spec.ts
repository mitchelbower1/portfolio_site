import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesAndCarsComponent } from './bikes-and-cars.component';

describe('BikesAndCarsComponent', () => {
  let component: BikesAndCarsComponent;
  let fixture: ComponentFixture<BikesAndCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesAndCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesAndCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
