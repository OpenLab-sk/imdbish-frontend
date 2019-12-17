import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  token = '';

  getToken() {
    return this.token;
  }

  login(email, password) {
    return this.http.post("http://localhost:8000/api/v1/auth/login", {
      email,
      password
    }).pipe(
      map((response: any) => this.token = response.token)
    );
  }
}
