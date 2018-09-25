import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MultimediaListProvider } from "../../providers/multimedia-list/multimedia-list";
import { CambioPage } from "../cambio/cambio";
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaMultimedia:any;

  constructor(public navCtrl: NavController, 
              public _multimediaListProvider:MultimediaListProvider, 
              public alertCtrl:AlertController,
              public toastCtrl: ToastController,
              public navParams: NavParams) 
  {
    this.getListMultimedia();

    if (navParams.get('peridoCambio') !== undefined){

      const toast = this.toastCtrl.create({
        message: 'Tu cambio se pidio correctamente',
        duration: 3000
      });
      toast.present();
    };


  }

  getListMultimedia(){
    console.log('obteniendo lista multimedia')
    this._multimediaListProvider.getListaMultimedia().subscribe(data => {
      this.listaMultimedia = data;
      console.log(this.listaMultimedia)
    })
  }

  mostrarCambiar(integrante,fecha)
  {
    if (integrante.estado == 'normal') this.presentConfirm(integrante,fecha)
  }

  presentConfirm(integrante, fecha) 
  {

    var fechaFormateada = new Date(fecha);
    let year = fechaFormateada.getFullYear();
    let month = fechaFormateada.getMonth();
    let day = fechaFormateada.getDate();

    let mensaje = `<b>${integrante.nombre}</b>, necesitas realizar un cambio para el día <b>${day}/${month}/${year}</b>`;

    let alert = this.alertCtrl.create({
      title: 'Solicitud cambio',
      message: mensaje,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.navCtrl.push(CambioPage,{
              id: integrante.id,
              fecha
            });
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
