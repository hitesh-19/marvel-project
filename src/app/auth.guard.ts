import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LandingPageService } from './_services/landing-page.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  public alertMsg: boolean;

  constructor(private landingPageService: LandingPageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.landingPageService.isLoggedIn) {
        this.alertMsg = false;
        return true;
      } else {
        this.alertMsg = true;
        return true;
      }
  }
  
}
