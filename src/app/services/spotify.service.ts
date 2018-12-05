import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class Spotify {

  constructor(public http: Http) { }
  // 5ba58858ba034c77968e7e9de9bd8ef4
  searchTrack(query: string) {
      const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5ba58858ba034c77968e7e9de9bd8ef4'
      }),
      withCredentials: true
    };
    const params: string = [
      `q-${query}`,
      `type=track`
    ].join('&');
    const queryURL = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL).map(res => res.json());
  }
}
