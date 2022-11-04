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
  token = '1234'
  nombre : String;
  usuario = {
    email:'',
    password:''
  };

  constructor(public router: Router, 
              private storage: Storage) {}
  
  ngOnInit() {}

  login(){
    localStorage.setItem('token',this.token)
  }
}