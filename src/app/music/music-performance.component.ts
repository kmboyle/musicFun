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

}

  ngOnInit() {
  this.id = this._route.snapshot.paramMap.get('id');
    }
playSong() {
    this._musicService.getSong(this.id).subscribe((encodedSongArrayBuffer: ArrayBuffer) => {
      this.arrayBuffer = this.audioContext.createBufferSource();
      this.audioContext.decodeAudioData(encodedSongArrayBuffer, buffer => {
        this.arrayBuffer.buffer = buffer;
        this.arrayBuffer.connect(this.audioContext.destination);
        this.arrayBuffer.start();
    });
  });
}
stopSong() {
  this.arrayBuffer.stop();
}
// to route with code, import the router and use it's navigate method
  onBack(): void {
    this._router.navigate(['/home']);
  }

}
