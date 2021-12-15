import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenreNavigatorComponent } from './moviegenre-navigator.component';

describe('MoviegenreNavigatorComponent', () => {
  let component: MovieGenreNavigatorComponent;
  let fixture: ComponentFixture<MovieGenreNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGenreNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
