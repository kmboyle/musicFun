import { Component, ViewChild } from '@angular/core';
import { MusicService } from './music/music.service';
import { MusicComponent } from './music/music.component';
import {IPerformance} from './models/music';
import { MatFormFieldControl  } from '@angular/material/form-field';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MusicService]
})
export class AppComponent {
  title = 'app';
  showDate: any;
  songs: any;
  errorMessage: string;
  @ViewChild(MusicComponent)
  public musicComponent: MusicComponent;

  constructor(private _musicService: MusicService,
              private spinnerService: Ng4LoadingSpinnerService) {
              }
  filterShow(id: string) {
    this._musicService.getPerformances().subscribe(songs => {
      this.songs = songs.filter(song => song.date === id);
      this.musicComponent = this.songs;
    });
  }
  myTimer() {
    console.log(this.musicComponent);
    if (this.musicComponent['length'] === 0) {
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
      this.musicComponent = this.songs;
      this.myTimer();
    });
  }
}
