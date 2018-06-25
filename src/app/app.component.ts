import { Component, ViewChild } from '@angular/core';
import { MusicService } from './music/music.service';
import { MusicComponent } from './music/music.component';
import {ISong} from './models/music-interface';
import { MatFormFieldControl  } from '@angular/material/form-field';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

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
  public musicComponent: MusicComponent;

}
