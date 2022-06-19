import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	

	constructor(
		public head: HeaderComponent
	) {

	}

  ngOnInit(): void {
  }
	
	popupShow(){
		this.head.popupShow()
	}
	popupHide(){
		this.head.popupHide()
	}
}
