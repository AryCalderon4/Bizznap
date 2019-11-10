import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage, NegocioPage} from "../index.pages";
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  mapa:any = HomePage ;
  negocio:any = NegocioPage; 
  Nombre: any; 
  Descripcion: any; 
  Celular: any; 
  Email: any; 
  Horarios: any; 
  Fotos: any; 
  Logo: any; 
  Productos: any; 
  Categoria: any; 
  
  params = {}
   /* Nombre: this.Nombre,
    Descripcion: this.Descripcion,
    Celular: this.Celular,
    Email: this.Email,
    Horarios: this.Horarios,
    Fotos: this.Fotos,
    Logo: this.Logo,
    Productos: this.Productos,
    Categoria: this.Categoria */

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    //this.postParams(); ?????
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    
  }

  postParams(){
    let params={
    Descripcion: this.Descripcion,
    Celular: this.Celular,
    Email: this.Email,
    Horarios: this.Horarios,
    Fotos: this.Fotos,
    Logo: this.Logo,
    Productos: this.Productos,
    Categoria: this.Categoria
    }
    
    this.restProvider.postParams(params);
    console.log(params);
  }

  test(){
    console.log(this.Nombre);
  }
}
