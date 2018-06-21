import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {IPerformance} from '../models/music';
import { MusicService } from './music.service';
import { FileService } from '../services/file-mgmt.service';

@Component({
    templateUrl: './file-mgmt.component.html',
    providers: [FileService]
})
export class FileMgmtComponent implements OnInit {

    fileToUpload: File = null;
    constructor(private fileUploadService: FileService, private _router: Router) {}
    ngOnInit(): void {
    }
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    }

    uploadFileToActivity() {
        // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
        //   // do something, if upload success
        //   console.log(data);
        //   }, error => {
        //     console.log(error);
        //   });
      }
      back() {
        this._router.navigate(['/home']);
      }

}
