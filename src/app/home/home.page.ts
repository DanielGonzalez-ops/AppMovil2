import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit 
{
  nombre : String;
  usuario = {
    email:'',
    password:''
  };

  constructor(public router: Router, 
              private storage: Storage) {}
  
  ngOnInit() {}

  onSubmitTemplate(){
    console.log('Form submit')
    console.log(this.usuario)
  }
}