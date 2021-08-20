import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { Spotify } from '../services/spotify.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Spotify]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private spotify: Spotify, private router: Router) { }

  ngOnInit() {
  }
  public login() {
    // this.authService.oauthSignIn();
    // if (localStorage.getItem('spotify_auth')) {
    //   const spotifyUser = JSON.parse(localStorage.getItem('spotify_auth'));
    //   if (spotifyUser.access_token) {
    //     this.router.navigate(['/home']);
    //   }
    // } else {
    //   this.spotify.redirectToAuth();
    // }
}

  public register() {
    this.router.navigate(['/register']);
  }

public logoff() {
    this.authService.logOut();
}

}
