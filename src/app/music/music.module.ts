import { ReactiveFormsModule } from '@angular/forms';
import { MusicComponent } from './music.component';
import { NgModule } from '@angular/core';
import { MusicRoutesModule } from './music.routes.module';
import { NewSongComponent } from './newSong.component';
import { BrowserModule } from '@angular/platform-browser';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MaterialModule } from '../material/material.module';
import { TrackComponent } from './track/track.component';

@NgModule({
    imports : [
        MusicRoutesModule,
        ReactiveFormsModule,
        BrowserModule,
        [Ng4LoadingSpinnerModule.forRoot()],
        MaterialModule,
    ],
    declarations: [
        NewSongComponent,
        MusicComponent,
        TrackComponent
    ]
})
export class MusicModule { }
