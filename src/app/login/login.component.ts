import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
  }
  public login() {
    // this.oauthService.initImplicitFlow();
    this.oauthSignIn();
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
    'client_id': '154832084236-l6qvqp4od9ijgrhsc75i81netn48vuvo.apps.googleusercontent.com',
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
