import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNavigatorComponent } from './movie-navigator.component';

describe('MovieNavigatorComponent', () => {
  let component: MovieNavigatorComponent;
  let fixture: ComponentFixture<MovieNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
