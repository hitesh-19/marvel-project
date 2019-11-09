import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  private API = '/assets/database';

  constructor(private http: HttpClient) { }

  getUpcomingMovies() {
    return this.http.get( this.API + '/upcoming-movies.json')
  }

}
