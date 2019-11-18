import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  apiUrl = ' http://localhost:8000/api/negociosAll';
  postNegocio = 'http://localhost:8000/api/negocios';
  userUrl = 'http://localhost:8000/api/login'; 

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
//cuando se envia un parametro debe ir dentro de la funcion
  postParams(parametro){
   return this.http.post(this.postNegocio , parametro).subscribe(data => { 
      console.log(data), err => {
      console.log(err)}
      });
  }

  postUsers(usuario){
    return this.http.post(this.userUrl , usuario).subscribe(data => { 
       console.log(data), err => {
       console.log(err)}
       });
   }

  }

