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
    keys: Array<string>;
    private id: any;
    @Input() filteredSongs: Array<IPerformance>;

  constructor(private _route: ActivatedRoute, private _musicService: MusicService) {
   if(! this.performances){
     this.performances=[];
     this.filteredSongs = [];
   }
   }
  ngOnInit(): void {
      this._musicService.getPerformances()
      .subscribe(
        performances => {
          this.performances = performances;
          console.log(this.performances);
        }, 
        error=>this.errorMessage = <any>error);

        this.performances.forEach((performance)=>{
          this.keys = Object.keys(performance);
        })
    }
}

