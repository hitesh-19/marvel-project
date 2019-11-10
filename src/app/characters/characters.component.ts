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
  public filteredArray = [];
  public filter: string;
  public noResult = 'none';

  constructor(private herosService: HerosService) { }

  ngOnInit() {

    //getting heros
    this.herosService.getHeros().subscribe(
      data => {
        // console.log(data['heros'])
        this.characters = data['heros']
        this.filteredArray = this.characters
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
        width:'15rem',
        display: 'block',
        opacity: 1
      }, 400)
    });

  }

  searchItems(item) {
    // console.log(item.value)
    this.filter = item.value.slice(0,3)
    this.filter = this.filter.charAt(0).toUpperCase()+this.filter.slice(1)
    // console.log(this.filter)

    this.filteredArray = [];

    if(item.value === '') {
      this.filteredArray = this.characters
    }

    this.characters.forEach((element, index, array) => {
      if(element.name.slice(0,3) === this.filter) {
        // console.log(element.name)
        
        this.filteredArray.push(element)
      } else if (index === array.length-1 && this.filteredArray.length === 0) {
        
        this.characters.forEach((element, index, array) => {
          if(element.roled_by.slice(0,3) === this.filter) {
            // console.log(element.name)
            
            this.filteredArray.push(element)
          } else if (index === array.length-1 && this.filteredArray.length === 0) {
            this.noResult = 'block';
          }
        })
      } 
      
      if (this.filteredArray.length > 0) {
        this.noResult = 'none';
      }
    })
  }

}
