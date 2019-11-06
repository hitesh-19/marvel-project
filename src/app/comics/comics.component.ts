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
  }

}
