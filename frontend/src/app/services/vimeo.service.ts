import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VimeoService {

    constructor(private http: HttpClient) { }

    getVideos(user:string) {
        return this.http.get('https://vimeo.com/api/v2/' + user + '/videos.json');
    }

}
