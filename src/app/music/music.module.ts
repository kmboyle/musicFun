import { ReactiveFormsModule } from '@angular/forms';
import { MusicComponent } from './music.component';
import { NgModule } from '@angular/core';
import { MusicRoutesModule } from './music.routes.module';
import { MusicPerformanceComponent } from './music-performance.component';
import { FileMgmtComponent } from './file-mgmt.component';
import { BrowserModule } from '@angular/platform-browser';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MaterialModule } from '../material.module';

@NgModule({
    imports : [
        MusicRoutesModule,
        ReactiveFormsModule,
        BrowserModule,
        [Ng4LoadingSpinnerModule.forRoot()],
        MaterialModule
    ],
    declarations: [
        FileMgmtComponent,
        MusicPerformanceComponent,
        MusicComponent
    ]
})
export class MusicModule { }
