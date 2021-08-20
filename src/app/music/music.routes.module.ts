import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router';

import { NewSongComponent } from './newSong.component';
import { TrackComponent } from './track/track.component';
import { AuthGuard } from '../helpers/auth.guard';

const routes: Routes = [
    {path: '', component: MusicComponent},
    {path: 'newSong', component: NewSongComponent},
    {path: 'newSong/:songID', component: NewSongComponent},
    {path: 'tracks/:id', component: TrackComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MusicRoutesModule {}
