import { Component, ViewChild } from '@angular/core';
import { MusicService } from './music/music.service';
import { MusicComponent } from './music/music.component';
import {IPerformance} from './music/music';

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
  errorMessage:string;
  @ViewChild(MusicComponent)
  public musicComponent: MusicComponent;
  
  constructor(private _musicService: MusicService){}
  
  filterShow(id:string) {
    
    this._musicService.getPerformances().subscribe(songs=>{
      this.songs = songs.filter(song=>song.date === id);
      this.musicComponent = this.songs;
    });
  }
}
