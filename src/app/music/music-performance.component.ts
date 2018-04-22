import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {IPerformance} from '../models/music';
import { MusicService } from './music.service';
import { FileService } from '../services/file-mgmt.service';


@Component({

  template: `<h1>{{ this.pageTitle }}</h1>
  <table>
  <tr *ngFor='let set of performance'>

            <td>{{set.title}}</td>
            <td><audio controls>
                            <source [src]='set.src' type='audio/mp3'>
                            </audio>
            </td>
            <button (click)='getDownload(set)'>Download</button>
        </tr>
  </table>
 
  <img src={{songURL}} id="myimg">
  <button (click)='onBack()'>Take me home</button>`,
  styleUrls: [],
  providers: [FileService]
})
export class MusicPerformanceComponent implements OnInit {
  pageTitle = '';
  performance: IPerformance[];
  errorMessage: string;
  setDate: string;
  performanceSongs: string;
  id: number;
  songURL: string;


  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _musicService: MusicService,
              private fileService: FileService) {

}

  ngOnInit() {
    
    //because the param is a string, add a + to convert the param string to a numeric id
    this.id= +this._route.snapshot.paramMap.get('id');
    this._musicService.getPerformances()
      .subscribe(performance => {
        this.performance = performance.filter(pfm => pfm.id === this.id);
        console.log(this.performance);
        this.pageTitle = `${this.performance[0].title} ${this.performance[0].date}`;
      }, error=>this.errorMessage=<any>error)
    }
  getDownload(song: Array<IPerformance>) {
    

    this.fileService.downloadFile(song).subscribe(url=>{
      this.songURL = url;
      console.log(this.songURL);
    });
  }

// to route with code, import the router and use it's navigate method
  onBack(): void {
    this._router.navigate(['/home']);
  }

}
