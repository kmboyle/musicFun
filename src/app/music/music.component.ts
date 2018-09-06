import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ISong} from '../models/music-interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [ MusicService]
})
export class MusicComponent implements OnInit {
    songs: ISong[];
    errorMessage: string;
    keys: Array<string>;
    songName: ISong;
    // songs: any;
    private id: any;
    filteredSongs: Array<ISong>;
    items: Observable<any[]>;
    audioContext = new AudioContext();
    arrayBuffer: any;

    constructor(private _route: Router,
                private _musicService: MusicService,
                private spinnerService: Ng4LoadingSpinnerService,
                private modalService: NgbModal,
                private snackBar: MatSnackBar) {
                  // db.firestore.settings({timestampsInSnapshots:true});
                  // this.items = db.collection('items').valueChanges();
                  // console.log(this.items);
                }
  ngOnInit(): void {
    this._musicService.getSongs()
    .subscribe(
      songs => {
        this.filteredSongs = songs;
        this.filteredSongs.forEach((song) => {
          if (this.filteredSongs['uploadDate']) {
            // need to make work
            this.filteredSongs['uploadDate'] = new Date(this.filteredSongs['uploadDate']).toLocaleDateString();
          }
        this.keys = Object.keys(song);
        console.log(this.filteredSongs);
        });
      },
      error => this.errorMessage = <any>error);
  }
  // resovling ng-template error [Angular] Member function is not callable
  trigger(callback: any, ...args: any[]) {
    return callback(...args);
  }

  open(content: any) {
    this.modalService.open(content);
  }
    myTimer() {
      if (this.filteredSongs['length'] === 0) {
        this.spinnerService.show();
        setTimeout(() => {
          this.spinnerService.hide();
          this.errorMessage = 'Sorry, no results found';
        }, 3000);
      }
    }
    searchFilter(event: any) {
      this.errorMessage = '';
      this._musicService.getSongs().subscribe(songs => {
        this.songs = songs.filter(song => song.filename.toLowerCase().includes(event.target.value.toLowerCase()));
        this.filteredSongs = this.songs;
        this.myTimer();
      });
    }
    filterShow(id: string): void {
      this._musicService.getSongs().subscribe(songs => {
        // if (id === 'ALL') {
        //   return this.filteredSongs = songs;
        // } else {
        //   this.songs = songs.filter(song => song.date === id);
        // this.filteredSongs = this.songs;
        // }
      });
    }
    playSong(songName: string): void {
      this.snackBar.open(songName);
      this.songName = this.filteredSongs.find(song => song.filename === songName);
      this._musicService.getSong(this.songName._id).subscribe((encodedSongArrayBuffer: ArrayBuffer) => {
        this.arrayBuffer = this.audioContext.createBufferSource();
        this.audioContext.decodeAudioData(encodedSongArrayBuffer, buffer => {
          this.arrayBuffer.buffer = buffer;
          this.arrayBuffer.connect(this.audioContext.destination);
          this.arrayBuffer.start();
      });
    });
      // this._route.navigate(['music', this.songName._id]);

    }
    stopSong() {
      this.snackBar.dismiss();
      this.arrayBuffer.stop();
    }
    getSrc(songId: string) {
      return window.location.origin + '/api/songs/' + songId;
    }
    deleteSong(id: string) {
      this._musicService.deleteSong(id).subscribe(response => {
        console.log(response); // i.e "File of ObjectID: 8s898fe deleted successfully"
        this._musicService.getSongs()
        .subscribe(
          songs => {
            this.filteredSongs = songs;
            this.filteredSongs.forEach((song) => {
              if (this.filteredSongs['uploadDate']) {
                // need to make work
                this.filteredSongs['uploadDate'] = new Date(this.filteredSongs['uploadDate']).toLocaleDateString();
              }
            this.keys = Object.keys(song);
            console.log(this.filteredSongs);
            });
          },
          error => this.errorMessage = <any>error);
      });
    }
    addSong() {
      this._route.navigate(['newSong']);
    }
}

