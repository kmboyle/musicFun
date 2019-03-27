import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Spotify } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Spotify]
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService, private spotify: Spotify, private router: Router) { }

  ngOnInit() {
  }
  public login() {
    if (localStorage.getItem('spotify_auth')) {
      const spotifyUser = JSON.parse(localStorage.getItem('spotify_auth'));
      if (spotifyUser.access_token) {
        this.router.navigate(['/home']);
      }
    } else {
      this.spotify.redirectToAuth();
    }
}

public logoff() {
    this.oauthService.logOut();
}
oauthSignIn() {
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  const form = document.createElement('form');
  form.setAttribute('method', 'GET');
  form.setAttribute('action', oauth2Endpoint);
  const params = {
    'client_id': environment.clientId,
    'redirect_uri': window.location.origin + '/home',
    'response_type': 'token',
    'scope': 'openid',
    'state': 'googleAuth'
  };
  for (const p in params) {
    if (p) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  }
  document.body.appendChild(form);
  form.submit();
}

public get name() {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims.given_name;
  }
}
