import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {
  listado = [];
  item : any;
  private urlBaseApi = 'http://localhost:3000/';

  constructor(
    private httpClient: HttpClient) {}

  getUsers()
  {
    let url = this.urlBaseApi + 'usuarios/';
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listado.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }

  getPosts(id: String){
    let url = this.urlBaseApi + 'Profesores/';
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { 
          if(item['id'] == id)
          {
            this.listado.push(item); 
          }
        })
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }

  getComments(id: String){
    let url = this.urlBaseApi + 'Asignaturas/';
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { 
          if(item['id'] == id)
          {
            this.listado.push(item); 
          }
        })
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }

}

