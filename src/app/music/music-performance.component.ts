import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {IPerformance} from '../models/music';
import { MusicService } from './music.service';

@Component({

  template: `<h1>{{ this.pageTitle }}</h1>
  <table>
  <tr *ngFor='let set of performance'>

            <td *ngIf='set.date == this.pageTitle'>{{ set.title }}</td>
            <td *ngIf='set.date == this.pageTitle'><audio controls>
                            <source [src]='set.src' type='audio/mp3'>
                            </audio>
            </td>

        </tr>
  </table>
  <button (click)='onBack()'>Take me home</button>`,
  styleUrls: []
})
export class MusicPerformanceComponent implements OnInit {
  pageTitle = '';
  performance: IPerformance[];
  errorMessage: string;
  setDate: string;
  performanceSongs: string;


  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _musicService: MusicService) {
    // console.log(this._route.snapshot.paramMap.get('id'));
    if (! this.performance) {
        this.performance = [];
        this.performanceSongs = '';
   }
}

  ngOnInit() {

    // //because the param is a string, add a + to convert the param string to a numeric id
    // let id= this._route.snapshot.paramMap.get('id');
    // this._musicService.getPerformances()
    //   .subscribe(performance => this.performance = performance, error=>this.errorMessage=<any>error)
    // this.pageTitle = `${id}`;

    }

// to route with code, import the router and use it's navigate method
  onBack(): void {
    this._router.navigate(['/home']);
  }

}
