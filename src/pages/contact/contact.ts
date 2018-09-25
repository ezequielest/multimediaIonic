import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MultimediaListProvider } from "../../providers/multimedia-list/multimedia-list";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  miembros

  constructor(public navCtrl: NavController, private _multimediaListProvider:MultimediaListProvider) {
      this._multimediaListProvider.getIntegrantes().subscribe(data=>{
        console.log(data)
        this.miembros = data;
      });
  }

}
