import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public i: number = 0;
  public getImage;

  constructor() { }

  ngOnInit() {

    setInterval( () => {
      this.i++;
      if(this.i%2 === 0) {
        this.getImage = '../../assets/images/logo4.jpg'
      } else {
        this.getImage =  '../../assets/images/logo3.jpg'
      }
    },700)
  }

}
