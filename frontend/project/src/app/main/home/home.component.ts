import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
	private btn: boolean = false
	public isAuthenticated: boolean = false
  private userSub: Subscription

	constructor(
		public auth: AuthService,
		public head: HeaderComponent
	) {}

  ngOnInit(): void {
  }
	
	popupShow(){
		this.btn = true
		this.head.popupShow()
	}
	popupHide(){
		if (this.btn){
			this.btn = false
			return
		}
		this.head.popupHide()
	}
}
