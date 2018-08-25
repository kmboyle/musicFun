import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {ISong} from '../models/music-interface';
import { tap } from 'rxjs/operators';

@Injectable()
export class MusicService {
    private _url = '/api/songs';
    constructor(private _http: HttpClient) {}

      getSongs(): Observable<ISong[]> {
          return this._http.get<ISong[]>(this._url)
          .catch(this.handleError);
      }
      getSong(id: string): Observable<any> {
        return this._http.get(`${this._url}/${id}`, { responseType: 'arraybuffer'})
              .pipe(
                  tap( error => console.error(error))
                );
      }
      deleteSong(id: string): Observable<any> {
        return this._http.delete(`${this._url}/${id}`).catch(this.handleError);
      }
      private handleError(err: HttpErrorResponse) {
          console.log(err.message);
          return Observable.throw(err.error.message);
      }
    }
