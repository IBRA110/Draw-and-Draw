import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
	{
		path: '', component: MainComponent, children:[
			{path: '', redirectTo:'/', pathMatch: 'full'},
			{path: '', component: HomeComponent},
			{path: 'tolls', loadChildren: () => 
				import('./main/tolls/tolls.module').then(m => m.TollsModule)},
			{path: 'pictures', loadChildren: () => 
				import('./main/pictures/pictures.module').then(m => m.PicturesModule), 
				canLoad: [AuthGuard]},
			{path: 'profile', loadChildren: () => 
				import('./main/profile/profile.module').then(m => m.ProfileModule),
				canLoad: [AuthGuard]}
		]
	},
	{path: '**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
