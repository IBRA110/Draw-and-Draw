import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { AuthService } from './auth.service';
import { AuthResData } from './auth.interfaces';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
	
	isLoginMode = true
	
	signupForm: FormGroup
	loginForm: FormGroup
  
	token: string;
  
	error:string = null;
  success:string = null;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private auth: AuthService
	){}

  ngOnInit(){
		this.signupForm = new FormGroup({
			'username': new FormControl(null, Validators.required),
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'passwords': new FormGroup({
				'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
				'confirmpassword': new FormControl(null, [Validators.required, Validators.minLength(8)])
			},this.passwordCheck)
		})
		this.loginForm = new FormGroup({
			'email': new FormControl(null, Validators.required),
			'password': new FormControl(null, Validators.required)
		})
  }
	
	onSwitch(){
		this.isLoginMode = !this.isLoginMode
	}
	
	onSignup(){
		this.auth.signup({
			'username': this.signupForm.get('username').value,
			'email': this.signupForm.get('email').value,
			'password': this.signupForm.get('passwords.password').value,
		})
		.subscribe(
      (data: AuthResData) => {
        this.isLoginMode = true;
        this.success='Signup was successfull';
        this.error = null;
				this.signupForm.reset()
      },(errorRes)=>{
        this.error=errorRes;
      }
    )	
	}

  onLogin(){
    this.auth.login(this.loginForm.value)
    .subscribe(
      (data: AuthResData) => {
        this.token = data.token
				this.document.getElementsByClassName('forms')[0].classList.remove('show')
		    this.loginForm.reset()
      },(errorRes)=>{
        this.error=errorRes;
      }
    )
  }

  passwordCheck(control: FormGroup): {[s:string]:boolean}{
    if(control.get('password').value != control.get('confirmpassword').value){
      return {'notsame': true}
    }
    return null;
  }

}
