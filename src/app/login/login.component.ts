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
    this.oauthService.initImplicitFlow();
}

public logoff() {
    this.oauthService.logOut();
}

public get name() {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims.given_name;
}

}
