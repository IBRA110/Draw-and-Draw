import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TollsComponent } from './tolls.component';
import { TollsBarComponent } from './tolls-bar/tolls-bar.component';
import { AuthGuard } from '../../auth/auth.guard';


@NgModule({
	declarations: [
    TollsComponent,
		TollsBarComponent,
	],
  imports: [
    CommonModule,
		RouterModule.forChild([
			{path: '', component: TollsComponent, children: [
				{path: '', redirectTo: '/tolls/paint', pathMatch: 'full'},
				{path: 'paint', loadChildren: () => 
					import('./paint/paint.module').then(m => m.PaintModule),
					canLoad: [AuthGuard]},
				{path: 'chess', loadChildren: () => 
					import('./chess/chess.module').then(m => m.ChessModule),
					canLoad: [AuthGuard]}
			]}
		]),
  ]
})
export class TollsModule { }
