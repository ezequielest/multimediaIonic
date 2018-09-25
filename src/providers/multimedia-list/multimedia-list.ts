import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';

/*
  Generated class for the MultimediaListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MultimediaListProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MultimediaListProvider Provider');
  }

  getListaMultimedia(){
    return this.http.get('http://localhost:8000/actividades/getActividadesAjax').pipe(
      map((data)=>{
        return data;
      })
    )
  }

}
