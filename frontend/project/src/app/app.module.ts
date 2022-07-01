import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './main/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
    ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
