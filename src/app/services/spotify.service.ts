import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Spotify {
  static BASE_URL = 'https://api.spotify.com/v1';

  constructor(public http: HttpClient) { }
  // 5ba58858ba034c77968e7e9de9bd8ef4
  redirectToAuth() {
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
  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }
  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }
  query(URL: string, params?: Array<string>): Observable<any[]> {
    const spotifyUser = JSON.parse(localStorage.getItem('spotify_auth'));
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': `Bearer ${spotifyUser.access_token}`})
    };
    let queryURL = `${Spotify.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this.http.get(queryURL, httpOptions).map((res: any) => res.json());
  }
  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }
}
