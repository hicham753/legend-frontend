import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieAComponent } from './serie-a.component';

describe('SerieAComponent', () => {
  let component: SerieAComponent;
  let fixture: ComponentFixture<SerieAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieAComponent]
    });
    fixture = TestBed.createComponent(SerieAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
