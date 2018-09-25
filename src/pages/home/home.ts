import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MultimediaListProvider } from "../../providers/multimedia-list/multimedia-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaMultimedia:any;

  constructor(public navCtrl: NavController, public _multimediaListProvider:MultimediaListProvider) {
    this.getListMultimedia();
  }

  getListMultimedia(){
    console.log('obteniendo lista multimedia')
    this._multimediaListProvider.getListaMultimedia().subscribe(data => {
      this.listaMultimedia = data;
    })
  }


}
