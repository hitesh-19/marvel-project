import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public value;

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

    $("li").hover(function() {
      this.value = $("a").innerHTML
      console.log(this.value)
    })
  }

  searchItems(item) {
    console.log(item)
  }

}
