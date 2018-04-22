import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FirebaseApp } from 'angularfire2';

@Injectable()

export class FileService {
    storageRef:any;
    constructor(private http:HttpClient){
        this.storageRef = firebase.storage().ref();
        console.log(this.storageRef);
    }
    test:boolean=true;

    postFile(fileToUpload: File): Observable<boolean> {
        const endpoint = 'api/performances/music.json';
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        console.log(fileToUpload);
        // Create the file metadata
        const metadata = {
        contentType: 'audio/mp3'
        };

        const uploadTask = this.storageRef.child(`Songs/${fileToUpload.name}`).put(fileToUpload, metadata);
        console.log(uploadTask);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot:any) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
            }, (error:any) => {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                console.log(error);
                break;
            case 'storage/canceled':
                // User canceled the upload
                console.log(error);
                break;
            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                console.log(error);
                break;
            }
            }, () => {
            // Upload completed successfully, now we can get the download URL
            const downloadURL = uploadTask.snapshot.downloadURL;
            });


        this.http.get(endpoint).subscribe(data => {
            const newSongObject = {
            "id": +`${data["length"] + 1}`,
            "title": `${fileToUpload.name.split('.')[0]}`,
            "src": `../assets/addedSongs/${fileToUpload.name}`,
            'date':new Date()
            }
            data[data["length"]] =newSongObject;
            console.log(data);
        })

        return Observable.of(this.test);
        //   .post(endpoint, formData, { headers: yourHeadersConfig })
        //   .map(() => { return true; })
        //   .catch((e) => this.handleError(e));
    }
}
