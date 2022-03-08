import { Component, OnInit, ViewChild } from '@angular/core';
import { VimeoService } from 'src/app/services/vimeo.service';
//import { Player } from '@vimeo/player';
import Player from "@vimeo/player";

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    constructor(private vimService: VimeoService) { }

    public video_title = "Select video to play";
    public video_description = "";

    user:string = 'musicgomusic';
    videos:any;
    player:any;
    @ViewChild('player_container') playerContainer:any;
    
    ngOnInit(): void {
        //const p = new Player("playerDiv");
        
        this.videos = this.vimService.getVideos(this.user);
        console.log(this.videos);
        this.videos.subscribe((x:any)=>{
            console.log('videos');
            console.log(x);
        })
    }

    onPlay = function(data:any) {
        console.log("Video is started...!");
    };

    onPause = function(data:any) {
        console.log("Video is paused...!");
    }

    onEnded = function(data:any) {
        console.log("Video is ended...!");
    }

    loadVideo(video:any){
        this.video_title = video.title;
        this.video_description = video.description;
        if(this.player != undefined){
            this.player.destroy();
        }
        this.player = new Player(this.playerContainer.nativeElement,{
            id: video.id,
            width: 640
        });
        this.player.on('play', this.onPlay);
        this.player.on('pause', this.onPause);
        this.player.on('ended', this.onEnded);
        this.player.play();

        this.player.getVideoId().then(function(id:any) {
            console.log("Video "+id+" is playing...!");
        }).catch(function(error:any) {
            console.log("Unable to get video ID");
        });
        
        this.player.getDuration().then(function(duration:any) {
            console.log("Video duration : "+duration);
        }).catch(function(error:any) {
            console.log("Unable to get video duration");
        });
    
    }

}
