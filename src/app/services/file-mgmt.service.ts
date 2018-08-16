import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FirebaseApp } from 'angularfire2';
import { ISong} from '../models/music-interface';
import { RequestOptions } from '@angular/http';

@Injectable()

export class FileService {
    storageRef: any;
    constructor(private http: HttpClient) {
       // this.storageRef = firebaseApp.storage().ref();
    }
    test = true;

    // postFile(songName: String, fileToUpload: File): Observable<any> {

    //     const headers = new HttpHeaders({
    //             'contentType': 'multipart/form-data'
    //         });
    //     const body = {
    //         name: songName,
    //         song: fileToUpload
    //     };
    //     console.log(body);
    //     this.http.post('/api/songs', {name: songName, song: fileToUpload}).catch(err => Observable.of({
    //         'Error': err
    //     }));

    // }
    downloadFile(fileToDownload: any): Observable<string> {
        console.log(fileToDownload);
        let urlFile;

        this.storageRef.child(`Songs/${fileToDownload}`).getDownloadURL().then((url: string) => {

            // // This can be downloaded directly:
            // const xhr = new XMLHttpRequest();
            // xhr.responseType = 'blob';
            // xhr.onload = (event) => {
            //   const blob = xhr.response;
            // };
            // xhr.open('GET', url);
            // xhr.send();

            // // Or inserted into an <img> element:
            // const img = document.getElementById('myimg');
            // img.src = url;
            urlFile = url;
            console.log(urlFile);

          }).catch((error: string) => {
            // Handle any errors
            console.log(error);
          });
          return Observable.of(urlFile);
    }
}
