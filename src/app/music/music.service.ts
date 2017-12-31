import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {IPerformance} from './music';

@Injectable()
export class MusicService {
    [x: string]: any;
    private _url = 'api/performances/music.json';
    constructor(private _http: HttpClient){}
    
    getPerformances(): Observable<IPerformance[]>{
        return this._http.get<IPerformance[]>(this._url)
        .do( data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
      
    }
    getPerformance(id: any): Observable<IPerformance[]>{
        console.log(id);
        return this.getPerformances()
        .map((performances: IPerformance[])=>{
            performances=> performances.filter(performances=>
                {performances.performanceId === this.id;
                console.log(performances);
            });
        })
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.error.message);
    }
    
}