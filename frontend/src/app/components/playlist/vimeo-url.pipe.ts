import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'vimeoUrl'
})
export class VimeoUrlPipe implements PipeTransform {
  constructor(protected _sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    let url = value.replace("vimeo.com/", "player.vimeo.com/video/");
    
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);

    //return this.sanitizer.bypassSecurityTrustUrl(url);
    //return url;
  }

}