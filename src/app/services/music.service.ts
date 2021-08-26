import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {ISong} from '../models/music-interface';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class MusicService {

    private baseUrl = environment.baseUrl;
    private _url = 'api/songs';
    songIdSrc$ = new BehaviorSubject(null);
    set setSongId(songId) {
      this.songIdSrc$.next(`${window.location.origin}/api/songs/${songId}`);
    }
    get getSongId() {
      return this.songIdSrc$.value;
    }
    constructor(private _http: HttpClient) {}

      getSongList(): Observable<ISong[]> {
          return this._http.get<ISong[]>(`${this.baseUrl}/${this._url}`)
          ;
      }
      getSong(id: string): Observable<any> {
        return this._http.get(`${this.baseUrl}/${this._url}/${id}`, { responseType: 'arraybuffer'});
      }
      deleteSong(id: string): Observable<any> {
        return this._http.delete(`${this.baseUrl}/${this._url}/${id}`);
      }
      editSongName(id: string, body: any): Observable<any> {
        return this._http.post(`${this.baseUrl}/${this._url}/editSongName/${id}`, body);
      }
    }
