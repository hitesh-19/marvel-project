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

  }

  signup() {
    alert('Working on it')
  }

}
