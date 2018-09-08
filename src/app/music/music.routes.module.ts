import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router';

import { FileMgmtComponent } from './file-mgmt.component';

const routes: Routes = [
    {path: 'home', component: MusicComponent},
    {path: 'newSong', component: FileMgmtComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MusicRoutesModule {}
