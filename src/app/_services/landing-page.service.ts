import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  public isLoggedIn: boolean = false;

  private API = '/assets/database';

  constructor(private http: HttpClient) { }

  getUpcomingMovies() {
    return this.http.get( this.API + '/upcoming-movies.json')
  }

  signUp(userData) {
    this.isLoggedIn = true;
    return this.http.post('https://formarvelfans-567a5.firebaseio.com/post.json', userData)
  }

  signIn(userData) {
    this.isLoggedIn = true;
    return this.http.get('https://formarvelfans-567a5.firebaseio.com/post.json')
  }

}
