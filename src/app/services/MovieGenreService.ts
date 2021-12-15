import {Injectable} from "@angular/core";

@Injectable()
export class MovieGenreService {
  findAllMovieGenres = () =>
    fetch('http://moviefinalv2-env.eba-pmaxbhvb.us-east-2.elasticbeanstalk.com/api/movieGenre')
      .then(response => response.json())
}