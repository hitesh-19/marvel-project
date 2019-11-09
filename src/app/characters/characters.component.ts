import { Component, OnInit } from '@angular/core';
import { HerosService } from '../_services/heros.service';

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

  public characters = [];

  constructor(private herosService: HerosService) { }

  ngOnInit() {

    //getting heros
    this.herosService.getHeros().subscribe(
      data => {
        console.log(data['heros'])
        this.characters = data['heros']
      }, err => {
        console.log(err)
      }
    )

    setInterval(() => {
      this.i++;
      if(this.i === 2) {
        this.i = 0;
      }
    }, 2000)

  
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
