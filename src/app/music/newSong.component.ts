import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { switchMap } from 'rxjs/operator/switchMap';

@Component({
    templateUrl: './newSong.component.html',
    styleUrls: ['./newSong.component.css']
})
export class NewSongComponent implements OnInit {
    songForm: FormGroup;
    errorMessage = '';
    success = '';
    existingSong = '';
    fileToUpload: File = null;
    constructor(private spinner: Ng4LoadingSpinnerService,
                private _router: Router,
                private fb: FormBuilder,
                private http: HttpClient,
                private activatedRoute: ActivatedRoute) {
        this.createForm();
    }
    createForm() {
        this.songForm = this.fb.group({
            title: ['', Validators.required]
        });
    }
    ngOnInit(): void {
        if (this.activatedRoute.paramMap) {
            // this.activatedRoute.paramMap.pipe(
            //     switchMap((params: ParamMap) => {

            //     }
            //     )));
        }
    }
    handleFileInput(files: FileList) {
        // drop breakpoint here to inspect for use of 'multiple'.
        console.log(files);
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
        this.spinner.show();
        const formData = new FormData();
        formData.append('song', this.fileToUpload);
        formData.append('name', this.songForm.controls['title'].value);
        console.log(formData);
        this.http.post('/api/songs', formData).subscribe(data => {
            this.spinner.hide();
            this.success = data['message'];
            this._router.navigate(['home']);
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
