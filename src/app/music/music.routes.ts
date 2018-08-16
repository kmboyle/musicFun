import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router';
import { MusicPerformanceComponent } from './music-performance.component';
import { ModuleWithProviders } from '@angular/core';
import { FileMgmtComponent } from './file-mgmt.component';

export const routing: ModuleWithProviders  = RouterModule.forChild([
    {path: 'music/:id', component: MusicPerformanceComponent},
    {path: 'home', component: MusicComponent},
    {path: 'newSong', component: FileMgmtComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]);
