import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {ISong} from '../models/music-interface';
import { MusicService } from './music.service';
import { FileService } from '../services/file-mgmt.service';


@Component({

  template: `<!-- <h1>{{ this.pageTitle }}</h1> -->
  <table *ngIf="this.songTrack">
            <td>{{ this.songTrack[0].filename }}</td>
            <!-- <td><audio controls>
                             <source [src]='song.src' type='audio/mp3'>
                             </audio>
             </td>
             <button (click)='getDownload(song)'>Download</button> -->
  </table>

  <img *ngIf="linkSrc" src="{{linkSrc}}" id="myimg">
  <button (click)='onBack()'>Take me home</button>`,
  styleUrls: [],
  providers: [FileService]
})
export class MusicPerformanceComponent implements OnInit {
  linkSrc: string;
  pageTitle = '';
  songTrack: ISong[];
  errorMessage: string;
  setDate: string;
  performanceSongs: string;
  id: string;
  songURL: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _musicService: MusicService,
              private fileService: FileService) {
                this.id = this._route.snapshot.paramMap.get('id');
                this._musicService.getSongs()
                  .subscribe(songs => {
                    this.songTrack = songs.filter(song => song._id === this.id);
                    console.log(this.songTrack);
                   // this.pageTitle = `${this.songTrack[0].filename} ${this.songTrack[0].uploadDate}`;
                  }, error => this.errorMessage = <any>error);
}

  ngOnInit() {

    }
  // getDownload(song: any) {
  //   console.log(song.src.split('/')[song.src.split('/').length - 1]);
  //   const songFileName = song.src.split('/')[song.src.split('/').length - 1];
  //   this.fileService.downloadFile(songFileName).subscribe(url => {

  //     this.linkSrc = url;
  //   });
  // }

// to route with code, import the router and use it's navigate method
  onBack(): void {
    this._router.navigate(['/home']);
  }

}
