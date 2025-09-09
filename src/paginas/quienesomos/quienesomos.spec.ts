import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quienesomos } from './quienesomos';

describe('Quienesomos', () => {
  let component: Quienesomos;
  let fixture: ComponentFixture<Quienesomos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quienesomos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quienesomos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
