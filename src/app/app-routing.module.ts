import { MusicModule } from './music/music.module';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [
    
    {path: 'home',  component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {
        path: 'music',
        canActivate: [AuthGuard],
        loadChildren: () => MusicModule
    },
    {path: '', redirectTo: 'home', pathMatch:'full'}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
