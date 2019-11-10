import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../_services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  public comics = []
  public filter: string;
  public filteredArray = [];
  public noResult = 'none';

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
  
    const $ = window["$"];

    $("#search").hover(function() {
      $("#search-box").animate({
        width:'20rem',
        display: 'block',
        opacity: 1
      }, 400)
    });

    //getting comics
    this.comicsService.getComics().subscribe(
      data => {
        console.log(data)
        this.comics = data['comics']
        this.filteredArray = this.comics
      }, err => {
        console.log(err)
      }
    )

  }

  searchItems(item) {
    // console.log(item.value)
    this.filter = item.value.slice(0,3)
    this.filter = this.filter.charAt(0).toUpperCase()+this.filter.slice(1)
    // console.log(this.filter)

    this.filteredArray = [];

    if(item.value === '') {
      this.filteredArray = this.comics
    }

    this.comics.forEach((element, index, array) => {
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
