import { Component, OnInit } from '@angular/core';


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

  constructor() {}
  
  ngOnInit() {}
  
  onSubmitTemplate(){
    console.log('Form submit')
    console.log(this.usuario)
  }
}