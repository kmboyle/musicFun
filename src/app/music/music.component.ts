import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {IPerformance} from '../models/music';
import { MusicService } from './music.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { MatFormFieldControl  } from '@angular/material/form-field';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgbModal, NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
    performances: IPerformance[];
    errorMessage: string;
    keys: Array<string>;
    songName: object;
    songs: any;
    private id: any;
    filteredSongs: Array<IPerformance>;
    items: Observable<any[]>;

    constructor(private _route: Router,
                private _musicService: MusicService,
                private spinnerService: Ng4LoadingSpinnerService,
                private modalService: NgbModal) {
                  // db.firestore.settings({timestampsInSnapshots:true});
                  // this.items = db.collection('items').valueChanges();
                  // console.log(this.items);
                }
  ngOnInit(): void {
    this._musicService.getPerformances()
    .subscribe(
      performances => {
        this.filteredSongs = performances;
        this.filteredSongs.forEach((performance) => {
        this.keys = Object.keys(performance);
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
      this._musicService.getPerformances().subscribe(songs => {
        this.songs = songs.filter(song => song.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.filteredSongs = this.songs;
        this.myTimer();
      });
    }
    filterShow(id: string): void {
      this._musicService.getPerformances().subscribe(songs => {
        if (id === 'ALL') {
          return this.filteredSongs = songs;
        } else {
          this.songs = songs.filter(song => song.date === id);
        this.filteredSongs = this.songs;
        }
      });
    }
    routeToSongPage(event: any): void {
      this.songName = this.filteredSongs.filter(song => song.title === event.target.innerHTML);
      this._route.navigate(['music/', this.songName[0].id]);

    }
    addSong() {
      this._route.navigate(['newSong']);
    }
}

