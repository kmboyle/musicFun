import { DemoDirective } from './../directives/demo.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicComponent } from './music.component';
import { NgModule } from '@angular/core';
import { MusicRoutesModule } from './music.routes.module';
import { NewSongComponent } from './newSong.component';
import { BrowserModule } from '@angular/platform-browser';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MaterialModule } from '../material/material.module';
import { TrackComponent } from './track/track.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        MusicRoutesModule,
        [Ng4LoadingSpinnerModule.forRoot()],
    ],
    declarations: [
        NewSongComponent,
        MusicComponent,
        TrackComponent,
        DemoDirective
    ]
})
export class MusicModule { }
