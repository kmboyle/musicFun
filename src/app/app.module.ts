import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { MaterialModule } from './material.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MusicModule } from './music/music.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    MusicModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    [Ng4LoadingSpinnerModule.forRoot()],
    NgbModule.forRoot(),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    InitCapsPipe,
    LoginComponent
  ],
  exports: [MaterialModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
