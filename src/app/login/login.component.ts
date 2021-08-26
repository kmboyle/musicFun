import { TokenStorageService } from './../services/token-storage.service';
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
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username;

  constructor(
    private authService: AuthService,
    private spotify: Spotify,
    private router: Router,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.username = this.tokenStorage.getUser().username;
    }
  }
  onSubmit() {
    this.authService.login(this.form).subscribe(
      (data: any) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/music']);
        this.authService.loggedIn$.next(true);
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    // window.location.reload();
    this.router.navigate(['/music']);
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
