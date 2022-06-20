import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable({providedIn: 'root'})
export class HeaderComponent implements OnInit {
	

	public authComp: any

	constructor(
		public auth: AuthService,
		@Inject(DOCUMENT) private document: Document
	) { 
		this.authComp = this.document.getElementsByClassName('forms')[0]
	}

  ngOnInit(): void {
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
