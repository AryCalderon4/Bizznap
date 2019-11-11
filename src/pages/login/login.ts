import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {RegistroPage} from "../index.pages"
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registro:any = RegistroPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  login(){
    this.navCtrl.push('home');
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }
}
