import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../_services/landing-page.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public kevinFeige: string;
  public stanLee: string;
  public i: number = 0;
  public loginContent: string = 'SignUp';
  public signupCondition: boolean = true;
  public signTab: boolean = true;
  public buttonText = 'SignUp';
  public disablePage = 'none';
  public errorMsg: string = null;
  public signupMethod;

  public upcomingMovies = [];

  constructor(private landingPageService: LandingPageService) { }

  ngOnInit() {

    // getting upcoming moives
    this.landingPageService.getUpcomingMovies().subscribe(
      data => {
        // console.log(data['movies'])
        this.upcomingMovies = data['movies']
      }, err => {
        console.log(err)
      }
    )

    // image time interval
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

  // signin and carousel pop up
  signPop() {

    const $ = window['$']

    if(this.signTab) {

      $('#signupcontainer').animate({
        height: '40vh',
        opacity: '1',
      }, 500)
      $('.carousel-container').animate({
        height: '0vh',
        opacity: '0'
      }, 500)

      this.buttonText = 'X'

    } else if(!this.signTab) {

      $('#signupcontainer').animate({
        height: '0',
        opacity: '0',
      }, 500)
      $('.carousel-container').animate({
        height: '70vh',
        opacity: '1'
      },500)

      this.buttonText = 'SignUp'
    }
    this.signTab = !this.signTab
  }


  signup() {
    this.signupCondition = !this.signupCondition
    if(this.signupCondition) {
      this.loginContent = 'SignUp'
    } else if(!this.signupCondition) {
      this.loginContent = 'SignIn'
    }
  }

  // On submitting of userData login and signin
  onSubmit(data: NgForm) {

    this.disablePage = 'block';

    if(this.signupCondition) {
      this.signupMethod = this.landingPageService.signUp(data.value.userData)
      this.SubmittingUserData()
    } else if(!this.signupCondition) {
      this.signupMethod = this.landingPageService.signIn(data.value.userData)
      this.SubmittingUserData()
    }

    data.reset();
  }

  // login and signin method
  private SubmittingUserData () {

    this.signupMethod.subscribe(
      data => {
        console.log(data)
        this.signPop()
        this.disablePage = 'none';
      }, err => {
        console.log(err)
        this.errorMsg = err
        this.disablePage = 'none';
      }
    )
  }

}
