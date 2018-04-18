import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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

export const firebaseConfig = {
  apiKey: 'AIzaSyB6p3dOXyEWZDIwMSUOTEej-6cSaPlE8LI',
  authDomain: 'awesomeness-a47d9.firebaseapp.com',
  databaseURL: 'https://awesomeness-a47d9.firebaseio.com',
  projectId: 'awesomeness-a47d9',
  storageBucket: 'awesomeness-a47d9.appspot.com',
  messagingSenderId: '154832084236'
};


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent },
      // {path: "music/:id", component: MusicPerformanceComponent},
      // {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    [Ng4LoadingSpinnerModule.forRoot()],
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    InitCapsPipe,
    MusicComponent,
    MusicPerformanceComponent
  ],
  exports: [MaterialModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
