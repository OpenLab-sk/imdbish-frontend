import { Component } from "@angular/core";
import { uuid } from "uuidv4";
import { MovieService } from "../services/movie.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  movies = this.movieService.movies;
  newRating = 1;
  newMovie = {
    id: "",
    name: "",
    director: "",
    year: "",
    description: "",
    ratings: []
  };

  constructor(private movieService: MovieService) {}
  addMovie() {
    this.newMovie.id = uuid();
    this.movies = this.movies.concat([this.newMovie]);
  }
  removeMovie(movieId) {
    this.movies = this.movies.filter(function(movie) {
      return movie.id !== movieId;
    });
    this.movies.filter(movie => movie.id !== movieId);
  }

  rateMovie(movieId) {
    this.movies = this.movies.map(movie => {
      if (movie.id === movieId) {
        movie.ratings = movie.ratings.concat([this.newRating]);
      }
      return movie;
    });
    this.newRating = 1;
  }

  getRatingAverage(ratings) {
    const numberOfRatings = ratings.length;
    const ratingSum = ratings.reduce((a, b) => a + b, 0);
    const ratingsAverage = ratingSum / numberOfRatings;
    return ratingsAverage;
  }
}
