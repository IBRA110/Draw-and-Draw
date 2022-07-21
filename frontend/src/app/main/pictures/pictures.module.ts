import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures.component';


@NgModule({
	declarations: [
		PicturesComponent
	],
  imports: [
    CommonModule,
		RouterModule.forChild([
			{path: '', component: PicturesComponent}
		]),

  ]
})
export class PicturesModule { }
