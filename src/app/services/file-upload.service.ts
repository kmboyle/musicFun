import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class FileService {
    constructor(private http:HttpClient){}
    test:boolean=true;

    postFile(fileToUpload: File): Observable<boolean> {
        ;

        const endpoint = 'api/performances/music.json';

        const formData: FormData = new FormData();

        formData.append('fileKey', fileToUpload, fileToUpload.name);
        console.log(fileToUpload.name);

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
