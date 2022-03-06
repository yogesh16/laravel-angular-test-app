import { Component, OnInit } from '@angular/core';
import { VimeoService } from 'src/app/services/vimeo.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    constructor(private vimService: VimeoService) { }
    user:string = 'musicgomusic';

    videos:any;

    ngOnInit(): void {
        this.videos = this.vimService.getVideos(this.user);
        this.videos.subscribe((x:any)=>{
            console.log('videos');
            console.log(x);
        })
    }

    onPlay(){
        
    }

}
