import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { 
	ActivatedRouteSnapshot, 
	CanActivate, 
	CanLoad, 
	Route, 
	RouterStateSnapshot, 
	UrlSegment, 
	UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
	constructor(
		private auth: AuthService,
		private router: Router
	){}

	canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			if (this.auth.isAuthenticated()){
				return true;
			}else{
				this.auth.logout()
				return this.router.navigate([''])
			}

  }  

	canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
			if (this.auth.isAuthenticated()){
				return true;
			}else{
				this.auth.logout()
				return this.router.navigate([''])
			}
  } 
}
