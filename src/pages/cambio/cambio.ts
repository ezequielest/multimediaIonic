import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";


/**
 * Generated class for the CambioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambio',
  templateUrl: 'cambio.html',
})
export class CambioPage {
  idCambio;
  fechaCambio;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idCambio= navParams.get('id');
    this.fechaCambio = navParams.get('fecha');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambioPage');
  }

  enviarSolicitudCambio(){
    console.log('necesito: fecha - idpersona')
    console.log(this.idCambio, this.fechaCambio)
    //PUT hacia la base de datos
    this.navCtrl.push(HomePage, {
      peridoCambio: true
    });
  }

}
