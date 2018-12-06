import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class Spotify {

  constructor(public http: Http) { }
  // 5ba58858ba034c77968e7e9de9bd8ef4
  redirectToSpotify() {
    const spotifyAuth = 'https://accounts.spotify.com/authorize';
    const form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', spotifyAuth);
    const params = {
      'client_id': '5ba58858ba034c77968e7e9de9bd8ef4',
      'redirect_uri': window.location.origin + '/home',
      'response_type': 'token',
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
  searchTrack(query: string) {
    const spotifyUser = JSON.parse(localStorage.getItem('spotify_auth'));
      const headers = new Headers({
        'Authorization': `Bearer ${spotifyUser.access_token}`
      });
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    const queryURL = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL, {headers: headers}).map(res => res.json());
  }
}
