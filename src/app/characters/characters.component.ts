import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public getImage;
  public img1;
  public img2;
  public isDisplay = true;
  public i: number = 0;

  constructor() { }

  ngOnInit() {

    this.img1 = '../../assets/images/groot2.jpg'
    this.img2 = '../../assets/images/groot1.jpg'

    setInterval(() => {
      if(this.i%2 === 0) {
        this.getImage = this.img1
      } else {
        this.getImage = this.img2
      }
      this.i++;
    }, 1000)

  
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
