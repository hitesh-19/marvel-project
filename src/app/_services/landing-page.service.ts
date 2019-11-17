import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { API } from '../API';
import { throwError } from 'rxjs';

interface UserData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  getUpcomingMovies() {
    return this.http.get( API.API_ENDPOINT + '/upcoming-movies.json')
  }

  // signup method
  signUp(userData) {
    this.isLoggedIn = true;
    // return this.http.post( API.API_REGISTER_ENDPOINT + '/post.json', userData)
    return this.http.post<UserData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCi4MOk4IhCYur9KdOe-wKPvLXVcqDpUpA',
      {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      }).pipe(catchError(this.errorHandling))
  }

  // loggingin method
  signIn(userData) {
    this.isLoggedIn = true;
    // return this.http.get( API.API_REGISTER_ENDPOINT + '/post.json')
    return this.http.post<UserData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCi4MOk4IhCYur9KdOe-wKPvLXVcqDpUpA',
      {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      }).pipe(catchError(this.errorHandling))
  }

  // error handling method
  private errorHandling(error: HttpErrorResponse) {

    let errorMsg = 'An unknown error occure'

    if(!error.error || !error.error.error) {
      return throwError(errorMsg)
    }
    switch(error.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'Email already exist';
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'Email not found';
      case 'INVALID_PASSWORD':
        errorMsg = 'Invalid password';
    }
    return throwError(errorMsg)
  }

}
