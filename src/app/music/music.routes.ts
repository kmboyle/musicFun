import { Routes, RouterModule } from '@angular/router';
import { MusicPerformanceComponent } from './music-performance.component';
import { ModuleWithProviders } from '@angular/core';

export const routing: ModuleWithProviders  = RouterModule.forChild([
   
    {path: "music/:id", component: MusicPerformanceComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]);
