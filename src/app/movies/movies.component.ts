import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies = [];

  constructor(private moivesService: MoviesService) { }

  ngOnInit() {

    const $ = window["$"];

    $("#search").hover(function() {
      $("#search-box").animate({
        width:'20rem',
        display: 'block',
        opacity: 1
      }, 400)
    });

    // getting movies
    this.moivesService.getMovies().subscribe(
      data => {
        console.log(data['movies'])
        this.movies = data['movies']
      }, err => {
        console.log(err)
      }
    )

  }

  searchItems(item) {
    console.log(item)
  }

}
