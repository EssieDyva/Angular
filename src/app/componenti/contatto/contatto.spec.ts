import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contatto } from './contatto';

describe('Contatto', () => {
  let component: Contatto;
  let fixture: ComponentFixture<Contatto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contatto],
    }).compileComponents();

    fixture = TestBed.createComponent(Contatto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
