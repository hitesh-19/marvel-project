import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  public comics = ['hello','hello','hello','hello','hello','hello']

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
