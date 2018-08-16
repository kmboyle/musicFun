import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router';
import { MusicPerformanceComponent } from './music-performance.component';

import { FileMgmtComponent } from './file-mgmt.component';

const routes: Routes = [
    {path: 'music/:id', component: MusicPerformanceComponent},
    {path: 'home', component: MusicComponent},
    {path: 'newSong', component: FileMgmtComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MusicRoutesModule {}
