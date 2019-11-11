import { Component } from '@angular/core';
import { Platform, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage, RegistroPage, HomePage , NegocioPage, MapaPage, DnegocioPage} from "../pages/index.pages";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  registro = RegistroPage; 
  home = HomePage; 
  negocio = NegocioPage; 
  mapa = MapaPage;
  detalles = DnegocioPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pagina:any){
    this.rootPage = pagina; 
    this.menuCtrl.close(); 
  }
}

