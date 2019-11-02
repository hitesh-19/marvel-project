import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const $ = window["$"];

    $("#btn1").hover(function() {
      $("#cube1").animate({
        width: '100px'
      }, 2000)
    })
  }

}
