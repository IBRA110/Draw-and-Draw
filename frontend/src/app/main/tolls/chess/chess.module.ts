import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChessComponent } from './chess.component';


@NgModule({
	declarations: [
		ChessComponent
	],
  imports: [
    CommonModule,
		RouterModule.forChild([
			{path: '', component: ChessComponent}
		]),
  ]
})
export class ChessModule { }
