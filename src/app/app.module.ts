import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { InitCapsPipe } from './shared/init-caps.pipe';

import { RouterModule } from '@angular/router';
import { MusicComponent } from './music/music.component';
import {HttpClientModule} from '@angular/common/http';
import { MusicService } from './music/music.service';
import {HttpModule} from '@angular/http';
import { MusicPerformanceComponent } from './music/music-performance.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import * as firebase from 'firebase/app';



import { FileMgmtComponent } from './music/file-mgmt.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    [Ng4LoadingSpinnerModule.forRoot()],
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    InitCapsPipe,
    MusicComponent,
    MusicPerformanceComponent,
    FileMgmtComponent,
    LoginComponent
  ],
  exports: [MaterialModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
