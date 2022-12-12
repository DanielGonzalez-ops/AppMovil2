import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { ServicioApiService } from '../servicio-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit 
{
  mensaje: String;
  lista = []
  nombre: String;

  constructor( private servicioapi: ServicioApiService,
               private storage: StorageService,
               private router: Router ) {}
  
               ngOnInit() {
                this.servicioapi.getUsers();
                this.lista = this.servicioapi.listado;
                console.log(this.lista);
                this.storage.init();
              }
             
              async checkear(nom: HTMLInputElement, cont: HTMLInputElement)
              {
                this.nombre = nom.value;
                //console.log(this.apirest.listado.find(({username}) => username === this.nombre));
                this.lista = this.servicioapi.listado.find(({correo}) => correo === this.nombre);
                //console.log(this.lista);
             
            
                if(nom.value == "")
                {
                  this.mensaje = " Ingrese nombre de usuario";
                }
                else if(cont.value == "")
                {
                  this.mensaje = " Por favor, ingrese su contraseña";
                }
                else if(!this.servicioapi.listado.find(({correo}) => correo === this.nombre)){
                  this.mensaje = " Usuario no existe";
                }
                else if(cont.value != "1234"){
                  this.mensaje = " Contraseña incorrecta";
                }
                else
                {
                  this.storage.agregar('id', this.lista['id']);
                  this.router.navigate(['/menu', this.lista['id']]);
                  nom.value = '';
                  cont.value = '';
                  this.mensaje = '';
                }
            
            /**
                else if(cont.value != "1234"){
                  this.mensaje = 'contraseña incorrecta'
                }*/
            
              }
            
}