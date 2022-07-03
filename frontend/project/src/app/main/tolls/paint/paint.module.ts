import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaintComponent } from './paint.component';

@NgModule({
	declarations: [
		PaintComponent
	],
  imports: [
    CommonModule,
		FormsModule,
		RouterModule.forChild([
			{path: '', component: PaintComponent}
		]),

  ]
})
export class PaintModule { }
