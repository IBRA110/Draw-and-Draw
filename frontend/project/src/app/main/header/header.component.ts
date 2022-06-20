import { Component, Inject, OnInit, DoCheck } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable({providedIn: 'root'})
export class HeaderComponent implements OnInit {
	
	public nav: any
	public authComp: any

	constructor(
		public auth: AuthService,
		@Inject(DOCUMENT) private document: Document,
		private router: Router
	) { 
		this.authComp = this.document.getElementsByClassName('forms')[0]
		this.nav = this.document.getElementsByClassName('nav')
	}

  ngOnInit(): void {
  }
	
	ngDoCheck(){
		if (this.router.url == '/paint'){
			this.nav[0].classList.add('paint-nav')	
		}
		else{
			this.nav[0].classList.remove('paint-nav')
		}
	}
	
	popupShow(){
		this.authComp.classList.add('show')
	}
	popupHide(){
		this.authComp.classList.remove('show')
	}
	logout(){
		this.auth.logout()
	}
}
