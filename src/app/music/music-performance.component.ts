import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {ISong} from '../models/music-interface';
import { MusicService } from './music.service';
import { FileService } from '../services/file-mgmt.service';
import { Subscription } from 'rxjs';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';


@Component({

  templateUrl: './music-performance.component.html',
  styleUrls: [],
  providers: [MusicService]
})
export class MusicPerformanceComponent implements OnInit {
  linkSrc: string;
  pageTitle = '';
  songTrack: string;
  errorMessage: string;
  uploadDate: string;
  performanceSongs: string;
  id: string;
  songURL: string;
  songSource: any;
  audioContext = new AudioContext();
  arrayBuffer: any;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _musicService: MusicService) {
  // this._musicService.getSongs()
  //   .subscribe(songs => {
  //     this.songTrack = songs.filter(song => song._id === this.id);
  //     console.log(this.songTrack);
  //     // this.pageTitle = `${this.songTrack[0].filename} ${this.songTrack[0].uploadDate}`;
  //   }, error => this.errorMessage = <any>error);
}

  ngOnInit() {
  
  let songData: any;
  this.arrayBuffer = this.audioContext.createBufferSource();

  this.id = this._route.snapshot.paramMap.get('id');
  this._musicService.getSong(this.id).subscribe(songChunks=>{
    console.log(songChunks.body);
    this.audioContext.decodeAudioData(songChunks.body, buffer => {
      this.arrayBuffer.buffer = buffer;
    })
    songChunks.byteLength
  }, error => this.errorMessage = <any>error,
  ()=> {
    console.log('finished');  
  });
    // this.songSubsription = this._musicService.getSong(this.id).subscribe(data => this.song = data);

    }
  // getDownload(song: any) {
  //   console.log(song.src.split('/')[song.src.split('/').length - 1]);
  //   const songFileName = song.src.split('/')[song.src.split('/').length - 1];
  //   this.fileService.downloadFile(songFileName).subscribe(url => {

  //     this.linkSrc = url;
  //   });
  // }
playSong() {
  this.arrayBuffer.connect(this.audioContext.destination);
  this.arrayBuffer.start();
    
    //.subscribe(song => {
    //this.audioContext.decodeAudioData()
    // this.songTrack = song[0].filename;
    // this.uploadDate = song[0].uploadDate;
  // }, error => this.errorMessage = <any>error,
  // ()=> console.log('finished') );

}
stopSong() {
  this.arrayBuffer.stop();
}
// to route with code, import the router and use it's navigate method
  onBack(): void {
    this._router.navigate(['/home']);
  }

}
