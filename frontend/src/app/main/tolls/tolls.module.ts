import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TollsComponent } from './tolls.component';
import { AuthGuard } from '../../auth/auth.guard';


@NgModule({
	declarations: [
    TollsComponent,
	],
  imports: [
    CommonModule,
		RouterModule.forChild([
			{path: '', component: TollsComponent, children: [
				{path: '', redirectTo: '/tolls/paint', pathMatch: 'full'},
				{path: 'paint', loadChildren: () => 
					import('./paint/paint.module').then(m => m.PaintModule),
					canLoad: [AuthGuard]},
			]}
		]),
  ]
})
export class TollsModule { }
