import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaintComponent } from './paint.component';
import { IonicModule } from '@ionic/angular';

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
		IonicModule.forRoot()
  ]
})
export class PaintModule { }
