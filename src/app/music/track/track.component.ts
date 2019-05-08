import { Component, OnInit, SecurityContext } from '@angular/core';
import { Spotify } from '../../services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
  providers: [Spotify]
})
export class TrackComponent implements OnInit {
  track: any;
  id: string;
  sanitizer: DomSanitizer;

  constructor(private spotify: Spotify, private route: ActivatedRoute,  private _router: Router, public domSanitizer: DomSanitizer) {
    this.route.params.subscribe(searchParam => {
        this.id = searchParam['id'] || '';
      });
   }

  ngOnInit() {
    this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
  }
  renderTrack(res: any) {
    this.track = null;
    const context: SecurityContext = 4;
    if (res && res.album.images && res.preview_url) {
      this.track = res;
      // this.track.album.images[1].url = this.sanitizer.bypassSecurityTrustUrl(this.track.album.images[1].url);
      // this.track.preview_url = this.sanitizer.bypassSecurityTrustUrl(this.track.preview_url);
    }
  }
  back() {
    this._router.navigate(['/home']);
  }

}
