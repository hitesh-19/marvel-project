import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies = ['hello','hello','hello','hello','hello','hello']
  
  constructor() { }

  ngOnInit() {

    const $ = window["$"];

    $("#search").hover(function() {
      $("#search-box").animate({
        width:'20rem',
        display: 'block',
        opacity: 1
      }, 400)
    });

  }

  searchItems(item) {
    console.log(item)
  }

}
