import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable({
    providedIn: 'root'
})
export class HeaderComponent implements OnInit, OnDestroy {
	
	isAuthenticated: boolean = false
  private userSub: Subscription
	public authComp: any

	constructor(
		private auth: AuthService,
		@Inject(DOCUMENT) private document: Document
	) { 
		this.authComp = this.document.getElementsByClassName('forms')[0]
	}

  ngOnInit(): void {
		this.userSub = this.auth.user.subscribe((user) => {
			this.isAuthenticated =! user? false: true;
		})
  }
	ngOnDestroy(){
		this.userSub.unsubscribe()
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
