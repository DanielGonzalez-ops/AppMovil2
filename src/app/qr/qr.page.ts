import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  qrString = 'Holi'

  constructor() { }

  ngOnInit() {
  }

}
