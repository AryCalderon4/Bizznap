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
  items:any;
  newData: any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    
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

 
   getItems(ev: any) {
    //Obtener valor del text box
    let val = ev.target.value;

        if (val && val.trim() != '') {
            console.log("STRING DETECTED")
            this.users = this.users.filter((user) => {
                return (user.Productos.toLowerCase().includes(val.toLowerCase()))
            });
            //En caso de pulsar cancel, reestablecer los cambios
          } else if (val == '' || val == undefined) {
            console.log("pulsaste cancel");
            this.users.length = 0;
            this.getUsers();
        }
    }
    

}
