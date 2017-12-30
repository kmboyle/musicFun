import { Component } from '@angular/core';
import { MusicService } from './music/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MusicService]
})
export class AppComponent {
  title = 'app';
}
