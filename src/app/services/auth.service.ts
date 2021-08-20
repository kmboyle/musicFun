import { TokenStorageService } from './token-storage.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  constructor(private oauthService: OAuthService, private http: HttpClient, private tokenService: TokenStorageService) {}

  public login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  public register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  public isLoggedIn() {
    const token = this.tokenService.getToken();
    if (!token) return false;
    const payload = atob(token.split('.')[1]);
    const parsedPayload = JSON.parse(payload);
    return parsedPayload.exp > Date.now() / 1000;
  }
  public oauthSignIn() {
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

  public logOut() {
    this.oauthService.logOut();
  }
  public get name() {
      const claims: any = this.oauthService.getIdentityClaims();
      if (!claims) {
        return null;
      }
      return claims.given_name;
    }
  public get userEmail() {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims.email;
  }
}