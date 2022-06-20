import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './main/home/home.component';
import { PaintComponent } from './main/paint/paint.component';

const routes: Routes = [
	{
		path: '', component: MainComponent, children:[
			{path: '', redirectTo:'/', pathMatch: 'full'},
			{path: '', component: HomeComponent},
			{path: 'paint', component: PaintComponent},
		]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
