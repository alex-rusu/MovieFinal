import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'app-movie-navigator',
  templateUrl: './movie-navigator.component.html',
  styleUrls: ['./movie-navigator.component.css']
})
export class MovieNavigatorComponent implements OnInit {
 

  constructor(private movieService: MovieService) { }
  movies: any[] | undefined;
    selectedMovie = {
      modules: [],
      id: undefined
    };
    ngOnInit(): void {
      this.movieService.findAllMovies()
        .then(movies => this.movies = movies)
    }
  
    selectMovie(movie: any) {
      this.selectedMovie = movie;
    }
  }
