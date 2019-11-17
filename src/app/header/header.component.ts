import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../_services/landing-page.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // public value;
  public alertMessage: boolean = false;

  constructor(private landingPageService: LandingPageService, private authGuard: AuthGuard) { }

  ngOnInit() {

    const $ = window['$']

    $('li').click(() => {
      $('#alertMsg').animate({
        opacity: '0.8'
      },1)
      $('#alertMsg').animate({
        opacity: '0'
      },1000)
    })
  }

  checkAlert() {
    this.alertMessage = this.authGuard.alertMsg
  }

}
