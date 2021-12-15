import { Component, OnInit } from '@angular/core';
import { MovieGenreService } from '../services/MovieGenreService';

@Component({
  selector: 'app-moviegenre-navigator',
  templateUrl: './moviegenre-navigator.component.html',
  styleUrls: ['./moviegenre-navigator.component.css']
})
export class MovieGenreNavigatorComponent implements OnInit {
 

  constructor(private movieGenreService: MovieGenreService) { }
  moviegenres: any[] | undefined;
    selectedMovieGenre = {
      modules: [],
      id: undefined
    };
    ngOnInit(): void {
      this.movieGenreService.findAllMovieGenres()
        .then(moviegenres => this.moviegenres = moviegenres)
    }
  
    selectMovieGenre(moviegenre: any) {
      this.selectedMovieGenre = moviegenre;
    }
  }