import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TollsComponent } from './tolls.component';
import { PaintComponent } from './paint/paint.component';
import { TollsBarComponent } from './tolls-bar/tolls-bar.component';



@NgModule({
	declarations: [
    TollsComponent,
		PaintComponent,
		TollsBarComponent
	],
  imports: [
    CommonModule,
		RouterModule.forChild([
			{path: '', component: TollsComponent, children: [
				{path: '', redirectTo: '/tolls/paint', pathMatch: 'full'},
				{path: 'paint', component: PaintComponent}
			]}
		]),
  ]
})
export class TollsModule { }
