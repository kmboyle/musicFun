import { AuthInterceptor, authInterceptorProviders } from './helpers/auth.interceptor';
import { UserService } from './services/user.service';
import { TokenStorageService } from './services/token-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MusicModule } from './music/music.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers/auth.guard';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    [Ng4LoadingSpinnerModule.forRoot()],
    MusicModule,
    NgbModule.forRoot(),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  providers: [AuthService, TokenStorageService, UserService, authInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent],
  exports: [ MaterialModule ]
})
export class AppModule { }
