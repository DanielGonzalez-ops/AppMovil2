import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  
  router: Router;
  photo: any
  image : SafeResourceUrl;
  

  constructor( private domSanitizer: DomSanitizer) { }

 
  async takePhoto(){
    const result = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64
    });
  
    this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.base64String)
  };
}
