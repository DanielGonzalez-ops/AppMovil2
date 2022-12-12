import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http'
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [QRCodeModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule],
  providers: [BarcodeScanner,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
