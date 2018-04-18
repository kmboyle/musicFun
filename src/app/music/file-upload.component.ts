import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {IPerformance} from '../models/music';
import { MusicService } from './music.service';
import { FileService } from '../services/file-upload.service';

@Component({
    template: `<div class="form-group">
    <label for="file">Choose File</label>
    <input type="file"
           id="file"
           (change)="handleFileInput($event.target.files)">
           <button (click)="uploadFileToActivity()">Upload</button>
</div>
<button (click)="back()">Back</button>`,
providers: [FileService]
})
export class FileUploadComponent implements OnInit {

    fileToUpload: File = null;
    
    constructor(private fileUploadService: FileService, private _router: Router){}
    ngOnInit(): void {
        
    }
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
          // do something, if upload success
          console.log(data);
          }, error => {
            console.log(error);
          });
      }
      back() {
        this._router.navigate(['/home'])
      }

}