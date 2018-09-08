import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  // issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  issuer: 'https://accounts.google.com/o/oauth2/v2/auth',
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/home',
  clearHashAfterLogin: true,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'spa-demo',
  clientId: '154832084236-l6qvqp4od9ijgrhsc75i81netn48vuvo.apps.googleusercontent.com',

  // dummyClientSecret: 'bar',
  responseType: 'id_token',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  // profile email voucher
  scope: 'openid',
};
