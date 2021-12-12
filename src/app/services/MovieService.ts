import {Injectable} from "@angular/core";

@Injectable()
export class MovieService {
  findAllMovies = () =>
    fetch('http://moviefinalv2-env.eba-pmaxbhvb.us-east-2.elasticbeanstalk.com/api/movie')
      .then(response => response.json())
}