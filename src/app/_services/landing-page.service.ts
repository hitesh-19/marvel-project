import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  private API = '/assets/database';

  constructor(private http: HttpClient) { }

  getUpcomingMovies() {
    return this.http.get( this.API + '/upcoming-movies.json')
  }

  signUp(userData) {
    return this.http.post('https://formarvelfans-567a5.firebaseio.com/post.json', userData)
  }

  signIn(userData) {
    return this.http.get('https://formarvelfans-567a5.firebaseio.com/post.json')
    // .pipe(
    //   map(res => {

    //       if(res['name'].userData.email === userData.email) {
    //         if(res['name'].userData.password === userData.password) {
    //           return res;
    //         } else {
    //           console.log('user not found')
    //         }
    //       }
    //   })
    // )
  }

}
