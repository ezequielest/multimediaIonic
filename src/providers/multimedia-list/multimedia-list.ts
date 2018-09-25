import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { listaMultimedia } from "../../mockups/listaMultimedia";
import { Observable } from 'rxjs/Observable';
import { listadoMiembros } from "../../mockups/listaMiembros";
/*
  Generated class for the MultimediaListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MultimediaListProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello MultimediaListProvider Provider');
    console.log(listaMultimedia)
  }

  getListaMultimedia(){
    return new Observable((observer)=>{
      observer.next(listaMultimedia);
    })
    /*return this.http.get('http://localhost:8000/actividades/getActividadesAjax').pipe(
      map((data)=>{
        return data;
      })
    )*/
  }

  getIntegrantes(){
    return new Observable(observer=>{
      observer.next(listadoMiembros);
    })
  }

}
