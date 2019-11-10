import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API'
@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  getComics() {
    return this.http.get( API.API_ENDPOINT + '/comics.json')
  }
}
