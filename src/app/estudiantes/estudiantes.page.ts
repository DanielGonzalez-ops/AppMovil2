import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

users:any = [];

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.getUsers().subscribe(res=>{
      console.log("res",res)
      this.users = res;
    })

  }

  getUsers(){
    return this.http
    .get("assets/server/datos.json")
    .pipe(
      map((res:any) =>{
        return res.usuarios;
      })
    )
  }

}
