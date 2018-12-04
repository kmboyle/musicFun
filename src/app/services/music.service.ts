import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {ISong} from '../models/music-interface';


@Injectable()
export class MusicService {
    private _url = '/api/songs';
    constructor(private _http: HttpClient) {}

      getSongList(): Observable<ISong[]> {
          return this._http.get<ISong[]>(this._url)
          .catch(this.handleError);
      }
      getSong(id: string): Observable<any> {
        return this._http.get(`${this._url}/${id}`, { responseType: 'arraybuffer'});
      }
      deleteSong(id: string): Observable<any> {
        return this._http.delete(`${this._url}/${id}`).catch(this.handleError);
      }
      editSongName(id: string, body: any): Observable<any> {
        return this._http.post(`${this._url}/editSongName/${id}`, body).catch(this.handleError);
      }
      private handleError(err: HttpErrorResponse) {
          console.log(err.message);
          return Observable.throw(err.error.message);
      }
    }
