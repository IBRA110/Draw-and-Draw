import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
	{
		path: '', component: MainComponent, children:[
			{path: '', redirectTo:'/', pathMatch: 'full'},
			{path: '', component: HomeComponent},
			{path: 'tolls', loadChildren: () => 
				import('./main/tolls/tolls.module').then(m => m.TollsModule)},
		]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
