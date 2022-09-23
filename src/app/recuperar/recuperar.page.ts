import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  usuario = {
    email:''
  };

  constructor() {}
  
  ngOnInit() {}
  
  onSubmitTemplate(){
    console.log('Form submit')
    console.log(this.usuario)
  }
}
