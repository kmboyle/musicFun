import { MusicComponent } from './music/music.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';


const routes: Routes = [
    {path: '', component: MusicComponent},
    {path: 'home', component: MusicComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
