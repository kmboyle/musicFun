import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {IPerformance} from '../models/music';

@Injectable()
export class MusicService {
    private _url = 'api/songs';
    constructor(private _http: HttpClient) {}
    getPerformances(): Observable<IPerformance[]> {
        return this._http.get<IPerformance[]>(this._url)
        .do( data => {})
        .catch(this.handleError);
    }
    getPerformance(id: string) {
    }
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.error.message);
    }
}
