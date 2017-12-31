import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {IPerformance} from './music';
import { MusicService } from './music.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  //styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
    date: string = "Date number";
    performances: IPerformance[];
    errorMessage: string;
    private id: any;
    performanceSongs: string;

  constructor(private _route: ActivatedRoute, private _musicService: MusicService) {
   if(! this.performances){
     this.performances=[
     ];
     this.performanceSongs = '';
   }
   }

  ngOnInit(): void {
      this._musicService.getPerformances()
      .subscribe(
        performances => {
          this.performances = performances;
        }, 
        error=>this.errorMessage = <any>error);
    }
}

