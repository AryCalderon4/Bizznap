import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {RegistroPage} from "../index.pages"
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registro:any = RegistroPage;
  Correo:any; 
  Contrasena:any;
  users ={}; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public restProvider: RestProvider) {
  }

  login(){
    this.navCtrl.push('home');
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }

  postUsers(){
    let  users = {
      Correo: this.Correo,
        Contrasena: this.Contrasena
   
       }
        this.restProvider.postUsers(users);
        console.log(users);
      }

}
