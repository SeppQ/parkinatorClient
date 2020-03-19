import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private auth : AuthenticationService, private router : Router){

  }
 // canActivate(
//    next: ActivatedRouteSnapshot,
 //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 //   return this.auth.isLoggedIn;
 // }
 canActivate(): boolean {
   if(this.auth.isLoggedIn){
     return true ;
   } else {
     this.router.navigate(['/']);
     return false;
   }
 }
}
