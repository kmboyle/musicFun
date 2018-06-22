import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {IPerformance} from '../models/music-interface';
import {Song} from '../models/data-model';
import { MusicService } from './music.service';
import { FileService } from '../services/file-mgmt.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './file-mgmt.component.html',
    providers: [FileService]
})
export class FileMgmtComponent implements OnInit {
    songForm: FormGroup;

    fileToUpload: File = null;
    constructor(private fileUploadService: FileService, private _router: Router, private fb: FormBuilder) {}
    ngOnInit(): void {
        this.songForm = this.fb.group({
            title: '',
            src: '',
            date: '',
            id: 0
        });
    }
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    }
    addSong(): boolean {
        console.log(this.songForm);
        return false;
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
        this._router.navigate(['/home']);
      }

}
