import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from "rxjs";
import { Router } from '@angular/router';

import { signupModel, loginModel, AuthResData, User } from './auth.interfaces';

@Injectable({providedIn: 'root'})
export class AuthService{
	
	user = new BehaviorSubject<User>(null);
	
	constructor(
		private http: HttpClient,
		private router: Router
	){}
	
	signup(account: signupModel){
		return this.http.post<AuthResData>('http://localhost:8000/api/v1/registration/',account)
			.pipe(catchError(this.handleError),tap((res)=>{
				console.log(res)
		}))
	}
	
	login(account: loginModel){
		return this.http.post<AuthResData>('http://localhost:8000/api/v1/login/', account)
			.pipe(catchError(this.handleError),tap((res)=>{
				this.handleAuth(res);	
		}))
	}	
	
	autoLogin(){
		const userData: AuthResData = JSON.parse(localStorage.getItem('user'))
		if (!userData){
			return
		}
		const LoadedUser = new User(
			userData.user_id, userData.username, userData.email, userData.token
		)
		this.user.next(LoadedUser)
		return
	}

	private handleError(error: HttpErrorResponse){
    let errormessage = 'An unknown errror occured'
    if(!error.error){
      return throwError(errormessage)
    }
    if(error.error.non_field_errors){
      errormessage = error.error.non_field_errors[0]
    }
    if(error.error.email){
			errormessage = error.error.email[0]
		}
		if(error.error.username){
	    errormessage = error.error.username[0]
    }
			return throwError(errormessage);
    }

  private handleAuth(res: AuthResData){
    const user = new User(res.user_id,res.email,res.username,res.token);
    this.user.next(user)
    localStorage.setItem('user',JSON.stringify(user))
  }
	
	logout(){
		this.user.next(null)
		localStorage.removeItem('user')
		this.router.navigate([''])
	}
	isAuthenticated(){
		return !!localStorage.getItem('user')
	}
}
