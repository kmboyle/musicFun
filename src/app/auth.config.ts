import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  // issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  issuer: 'http://localhost:3000',
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/home',
  clearHashAfterLogin: true,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'spa-demo',
  clientId: 'foo',

  dummyClientSecret: 'bar',
  responseType: 'id_token',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  // profile email voucher
  scope: 'openid',
};
