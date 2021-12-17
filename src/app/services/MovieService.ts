import {Injectable} from "@angular/core";

@Injectable()
export class MovieService {
  findAllMovies = () =>
    fetch('http://Moviefinalv3-env.eba-wviq2tqt.us-east-2.elasticbeanstalk.com/api/movie')
      .then(response => response.json())
}