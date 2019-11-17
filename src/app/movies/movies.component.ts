import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../_services/movies.service';
import { filter } from 'rxjs/operators';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies = [];
  public filter: string;
  public filteredArray = [];
  public noResult = 'none';
  public disablePage: string = 'none';
  public loadingSpinner: boolean = false;

  constructor(private moivesService: MoviesService) {}

  ngOnInit() {

    this.loadingSpinner = true;

    const $ = window["$"];

    $("#search").hover(function() {
      $("#search-box").animate({
        width:'15rem',
        display: 'block',
        opacity: 1
      }, 400)
    });

    // getting movies
    this.moivesService.getMovies().subscribe(
      data => {
        this.movies = data['movies']
        this.filteredArray = this.movies
        this.loadingSpinner = false;
      }, err => {
        console.log(err)
        this.loadingSpinner = false;
      }
    )

  }

  searchItems(item) {
    // console.log(item.value)
    this.filter = item.value
    this.filter = this.filter.charAt(0).toUpperCase()+this.filter.slice(1)
    // console.log(this.filter)

    this.filteredArray = [];

    if(item.value === '') {
      this.filteredArray = this.movies
    }

    this.movies.forEach((element, index, array) => {


      // for(let i = 1; i < this.filter.length; i++) {
      //   console.log(this.filter.length)
      //   if(this.filter === element.series.substring(0,i)) {
      //     console.log(element.series)
      //     this.filteredArray.push(element)
      //   }
      // }

      if(element.series.slice(0,3) === this.filter) {
        // console.log(element.series)
        
        this.filteredArray.push(element)
      } else if (index === array.length-1 && this.filteredArray.length === 0) {
        // console.log(this.filteredArray.length)
        this.noResult = 'block';
      } else if (this.filteredArray.length > 0) {
        this.noResult = 'none';
      }
    })
  } 

}
