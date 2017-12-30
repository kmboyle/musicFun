import {MusicService} from './music.service';
import { Component } from '@angular/core';


@Component({
    selector: 'pm-musicList'
})
export class MusicListComponent {
    constructor(private _musicService: MusicService){
    }
}