import {Injectable} from "@angular/core";

@Injectable()
export class MovieGenreService {
  findAllMovieGenres = () =>
    fetch('Moviefinalv3-env.eba-wviq2tqt.us-east-2.elasticbeanstalk.com/api/movieGenre')
      .then(response => response.json())
}