import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {DnegocioPage} from "../index.pages";
/**
 * Generated class for the NegocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-negocio',
  templateUrl: 'negocio.html',
})
export class NegocioPage {
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
   // this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NegocioPage');
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  detalles(user){
    this.navCtrl.setRoot(DnegocioPage,user);
  }
}
