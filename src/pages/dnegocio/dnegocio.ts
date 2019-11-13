import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the DnegocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dnegocio',
  templateUrl: 'dnegocio.html',
})
export class DnegocioPage {
user:any; 
datos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.user={
      id:navParams.get('id'),
      Nombre:navParams.get('Nombre'),
      Descripcion:navParams.get('Descripcion'),
      Celular:navParams.get('Celular'),
      Email:navParams.get('Email'),
      Horario:navParams.get('Horario'),
      Fotos:navParams.get('Fotos'),
      Logo:navParams.get('Logo'),
      Productos:navParams.get('Productos'),
      Categoria:navParams.get('Categoria')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DnegocioPage');
  }

}
