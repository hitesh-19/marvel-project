import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public kevinFeige: string;
  public stanLee: string;
  public i: number = 0;

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      if(this.i === 0) {
        this.kevinFeige = '../../assets/images/kevinfeige.jpg'
        this.stanLee = '../../assets/images/stanlee1.jpg'
      } else if(this.i === 1) {
        this.kevinFeige = '../../assets/images/kevinfeige2.jpg'
        this.stanLee = '../../assets/images/stanlee2.jpg'
      } else if(this.i === 2){
        this.kevinFeige = '../../assets/images/kevinfeige3.jpg'
        this.stanLee = '../../assets/images/stanlee3.jpg'
      }
      this.i++;
      if(this.i === 3) {
        this.i = 0;
      }
    }, 2000)
  }

}
