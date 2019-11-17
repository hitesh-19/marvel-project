import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fanclub',
  templateUrl: './fanclub.component.html',
  styleUrls: ['./fanclub.component.scss']
})
export class FanclubComponent implements OnInit {

  public fanclubPage: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
