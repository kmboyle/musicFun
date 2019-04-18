import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // use this to set correct theme class on app holder
  // eg: <div [class]="themeClass">...</div>
  themeClass: string;
constructor(private oauthService: OAuthService, private overlayContainer: OverlayContainer) {
  // this.configureWithNewConfigApi();
}
ngOnInit() {
    // subscribe to some source of theme change events, then...
    // this.themeClass = newThemeClass;
    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    // const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    // const themeClassesToRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    // if (themeClassesToRemove.length) {
    //    overlayContainerClasses.remove(...themeClassesToRemove);
    // }
    // overlayContainerClasses.add(newThemeClass);
  }

private configureWithNewConfigApi() {
  this.oauthService.configure(authConfig);
  this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  this.oauthService.loadDiscoveryDocumentAndTryLogin();
}

}
