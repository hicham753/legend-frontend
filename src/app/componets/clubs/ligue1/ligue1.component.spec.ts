import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1Component } from './ligue1.component';

describe('Ligue1Component', () => {
  let component: Ligue1Component;
  let fixture: ComponentFixture<Ligue1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ligue1Component]
    });
    fixture = TestBed.createComponent(Ligue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
