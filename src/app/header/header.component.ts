import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../_services/landing-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // public value;
  // public signinCondition = 'none';

  constructor(private landingPageService: LandingPageService) { }

  ngOnInit() {

  }

}
