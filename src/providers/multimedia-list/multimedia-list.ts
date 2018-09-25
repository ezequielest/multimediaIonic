import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { listaMock } from "../../mockups/listaMultimedia";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MultimediaListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MultimediaListProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello MultimediaListProvider Provider');
    console.log(listaMock)
  }

  getListaMultimedia(){
    return new Observable((observer)=>{
      observer.next(listaMock);
    })
    /*return this.http.get('http://localhost:8000/actividades/getActividadesAjax').pipe(
      map((data)=>{
        return data;
      })
    )*/
  }

}
