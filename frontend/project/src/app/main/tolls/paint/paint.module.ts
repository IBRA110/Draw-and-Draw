import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaintComponent } from './paint.component';

import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
	declarations: [
		PaintComponent
	],
  imports: [
    CommonModule,
		FormsModule,
		ColorPickerModule,
		RouterModule.forChild([
			{path: '', component: PaintComponent}
		]),

  ]
})
export class PaintModule { }
