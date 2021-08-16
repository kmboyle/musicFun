import { MusicService } from './services/music.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MusicService]
})
export class AppComponent implements OnInit {
    // use this to set correct theme class on app holder
  // eg: <div [class]="themeClass">...</div>
  @ViewChild('audioComponent') audioComponent: HTMLAudioElement;
  themeClass: string;
  htmlEl = document.getElementsByTagName('html')[0];
  darkTheme = false;
  musicForm: FormGroup;
  src$ = new BehaviorSubject('');
constructor(
  private oauthService: OAuthService,
  private overlayContainer: OverlayContainer,
  private musicService: MusicService) {
  // this.configureWithNewConfigApi();
}

songSrc$ = this.musicService.songIdSrc$.pipe(
  filter(src => !!src),
  tap(src => this.src$.next(src)
  )
)
ngOnInit() {
  this.musicForm = new FormGroup({
    theme: new FormControl('')
  });
  if (localStorage.getItem('theme')) {
    this.activateTheme(localStorage.getItem('theme'));
  } else {
    this.activateTheme('light');
  }

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
activateTheme(themeStyle) {
  if (themeStyle === 'dark') {
    this.darkTheme = true;
    this.htmlEl.classList.add('unicorn-dark-theme');
    this.musicForm.controls.theme.setValue(true);
    localStorage.setItem('theme', 'dark');
  } else if (themeStyle === 'light') {
    this.darkTheme = false;
    this.htmlEl.classList.remove('unicorn-dark-theme');
    this.musicForm.controls.theme.setValue(false);
    localStorage.setItem('theme', 'light');
  } else {
    this.musicForm.controls.theme.setValue(false);
    localStorage.setItem('theme', 'light');
  }
}
toggleTheme() {
  if (this.musicForm.controls['theme'].value) {
    this.darkTheme = true;
    this.htmlEl.classList.add('unicorn-dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    this.darkTheme = false;
    this.htmlEl.classList.remove('unicorn-dark-theme');
    localStorage.setItem('theme', 'light');
  }
}
}
