import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {IPerformance} from './music';

@Injectable()
export class MusicService {
    private _url = 'api/performances/music.json';
    constructor(private _http: Http){}
    
    getPerformances(){
        return this._http.get(this._url)
        .map((response: Response) =><IPerformance[]>response.json().performanceSongs);
        // .do( data => console.log('All: ' + JSON.stringify(data)))
        // .catch(this.handleError);
      
    }
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.error.message);
    }
}