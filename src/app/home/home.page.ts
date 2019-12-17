import { Component } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  movies = [];
  newRating = 1;
  newMovie = {
    name: "",
    director: "",
    year: "",
    description: ""
    // ratings: []
  };

  constructor(
    private movieService: MovieService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadMovies();
    this.userService.login("paul.mccartney@beatles.uk", "liverpool").subscribe();
  }

  loadMovies() {
    this.movieService.loadMovies().subscribe(movies => {
      this.movies = movies as any;
    });
  }

  addMovie() {
    this.movieService.addMovie(this.newMovie).subscribe(() => {
      this.loadMovies();
    });

    this.newMovie = {
      name: "",
      director: "",
      year: "",
      description: ""
      // ratings: []
    };
  }
  removeMovie(movieId) {
    this.movieService.removeMovie(movieId);
    this.movies = this.movieService.movies;
  }

  rateMovie(movieId) {
    this.movieService.rateMovie(movieId, this.newRating);
    this.movies = this.movieService.movies;
    this.newRating = 1;
  }

  getRatingAverage(ratings) {
    const numberOfRatings = ratings.length;
    const ratingSum = ratings.reduce((a, b) => a + b, 0);
    const ratingsAverage = ratingSum / numberOfRatings;
    return ratingsAverage;
  }
}
