import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router';

import { NewSongComponent } from './newSong.component';

const routes: Routes = [
    {path: 'home', component: MusicComponent},
    {path: 'newSong', component: NewSongComponent},
    {path: 'newSong/:songID', component: NewSongComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MusicRoutesModule {}
