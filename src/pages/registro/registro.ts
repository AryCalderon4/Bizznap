import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage, NegocioPage} from '../index.pages';
import { RestProvider } from '../../providers/rest/rest';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  //datos:FormGroup;
  NuevoNegocio: any;
  
  params = {}
   /* Nombre: this.datos.get Nombre,
    Descripcion: this.datos.get Descripcion,
    Celular: this.datos.get Celular,
    Email: this.datos.get Email,
    Horarios: this.datos.get Horarios,
    Fotos: this.datos.get Fotos,
    Logo: this.datos.get Logo,
    Productos: this.datos.get Productos,
    Categoria: this.datos.get Categoria */

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    /*this.datos = this.formBuilder.group({
      Nombre:['', Validators.required], 
      Descripcion:['', Validators.required], 
      Celular:['',[
                    Validators.required,
                    Validators.pattern("[0-9]{10}")
                  ]
              ], 
      Email:['', [
                    Validators.required,
                    Validators.email
                  ]
                ], 
      Horarios:['', Validators.required], 
      Fotos:['', Validators.required], 
      Logo:['', Validators.required], 
      Productos:['', Validators.required], 
      Categoria:['', Validators.required]
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    
  }
 

  postParams(){
    let  params = {
      Nombre: this.Nombre,
        Descripcion: this.Descripcion,
        Celular: this.Celular,
        Email: this.Email,
        Horarios: this.Horarios,
        Fotos: this.Fotos ,
        Logo: this.Logo ,
        Productos: this.Productos,
        Categoria: this.Categoria 
       }
        this.restProvider.postParams(params);
        console.log(params);
      }
    /*
    this.NuevoNegocio= {
    Nombre: this.datos.get ('Nombre'),
    Descripcion: this.datos.get ('Descripcion'),
    Celular: this.datos.get ('Celular'),
    Email: this.datos.get ('Email'),
    Horarios: this.datos.get ('Horarios'),
    Fotos: this.datos.get ('Fotos') ,
    Logo: this.datos.get ('Logo') ,
    Productos: this.datos.get ('Productos'),
    Categoria: this.datos.get ('Categoria') 
   }
   this.restProvider.postParams(this.NuevoNegocio);
   console.log(this.NuevoNegocio);
  }
  */

 
}


