import { Injectable } from "@angular/core";
import { uuid } from "uuidv4";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";

// const movies = [
//   {
//     id: uuid(),
//     name: "Pulp Fiction",
//     director: "Quentin Tarantino",
//     year: "1993",
//     ratings: [],
//     description:
//       "Excepteur tempor id aliqua ut eu enim quis id dolor sit dolore. Excepteur incididunt eu non esse deserunt. Laborum proident elit proident amet ullamco aute. Sunt ut elit officia aliquip officia veniam irure enim reprehenderit. Duis aliqua officia in dolore ullamco enim aute mollit est sunt cupidatat sit deserunt. Irure ea minim ipsum ut excepteur labore sunt id exercitation officia anim nisi deserunt reprehenderit."
//   },
//   {
//     id: uuid(),
//     name: "Inglorious Basterds",
//     director: "Quentin Tarantino",
//     year: "2009",
//     ratings: [],
//     description:
//       "Aliqua pariatur dolore dolore tempor reprehenderit cillum quis culpa ullamco laborum culpa. Nisi tempor aliquip dolor magna qui qui aliquip nostrud ullamco quis qui fugiat aliquip. Velit do laboris sit minim et eu. Do pariatur ullamco proident eiusmod id culpa velit enim id est ut dolore ex consequat. Veniam duis proident esse laboris ea et sint reprehenderit officia ea. Ipsum id eiusmod tempor est occaecat sit culpa aute minim amet tempor laborum. Aute consequat veniam Lorem quis."
//   },
//   {
//     id: uuid(),
//     name: "Forrest Gump",
//     director: "Robert Zemeckis",
//     year: "1994",
//     ratings: [],
//     description:
//       "Dolor cupidatat et nisi nulla quis laboris excepteur exercitation ad. Enim velit ea reprehenderit aliqua aliquip dolor. Ullamco consequat reprehenderit ea aliquip aute laborum commodo et magna id est mollit cillum. Nulla nulla aute irure nisi pariatur aute qui ad non amet tempor dolore."
//   },
//   {
//     id: uuid(),
//     name: "The Godfather",
//     director: "Francis Ford Coppola",
//     year: "1972",
//     ratings: [],
//     description:
//       "Incididunt labore exercitation laborum laborum dolor ullamco dolore. Sunt dolore aliquip aliquip minim ea labore consectetur velit pariatur irure enim minim. Aute occaecat tempor sint laborum irure. Aliquip laborum incididunt est reprehenderit esse excepteur voluptate deserunt. Aliqua minim nisi enim dolore reprehenderit duis occaecat labore laborum."
//   }
// ];

@Injectable({
  providedIn: "root"
})
export class MovieService {
  movies = [];
  constructor(private http: HttpClient, private userService: UserService) {}

  loadMovies() {
    return this.http.get("http://localhost:8000/movies");
  }

  addMovie(movie) {
    return this.http.post("http://localhost:8000/movies", movie, {
      headers: { Authorization: `Bearer ${this.userService.getToken()}` }
    });
  }

  removeMovie(movieId) {
    return this.http.delete(`http://localhost:8000/movies/${movieId}`);
  }

  rateMovie(movieId, rating) {
    this.movies = this.movies.map(movie => {
      if (movie.id === movieId) {
        movie.ratings = movie.ratings.concat([rating]);
      }
      return movie;
    });
  }
}
