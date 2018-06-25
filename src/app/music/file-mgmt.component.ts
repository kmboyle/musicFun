import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ISong} from '../models/music-interface';
import {Song} from '../models/data-model';
import { MusicService } from './music.service';
import { FileService } from '../services/file-mgmt.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    templateUrl: './file-mgmt.component.html',
    styleUrls: ['./file-mgmt.component.css'],
    providers: [FileService]
})
export class FileMgmtComponent implements OnInit {
    songForm: FormGroup;
    errorMessage = '';
    success = '';
    fileToUpload: File = null;
    constructor(private fileUploadService: FileService, private _router: Router, private fb: FormBuilder, private http: HttpClient) {
        this.createForm();
    }
    createForm() {
        this.songForm = this.fb.group({
            title: ['', Validators.required]
        });
    }
    ngOnInit(): void {
    }
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }
    addSong(): boolean {
        console.log(this.songForm.controls);
        return false;
    }

    uploadFileToActivity() {
        if (this.songForm.invalid || !this.fileToUpload) {
            return this.errorMessage = 'Please include a song name and a song file.';
        }
        const formData = new FormData();
        formData.append('song', this.fileToUpload);
        formData.append('name', this.songForm.controls['title'].value);
        console.log(formData);
        this.http.post('/api/songs', formData).subscribe(data => {
            this.success = data['message'];
        }, err => this.errorMessage = 'Oops, something went wrong.');
        // this.fileUploadService.postFile(, this.fileToUpload).subscribe(data => {
        //   // do something, if upload success
        //   // this.success = 'Upload Success!';
        //   if (data.Error) {
        //       this.errorMessage = 'Sorry, Upload Failed.';
        //   } else {
        //     this.success = 'Upload Success!';
        //   }
        //   console.log(data);
        //   }, error => {
        //     console.log(error);
        //   });
      }
      back() {
        this._router.navigate(['/home']);
      }

}
