import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnempleoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnempleoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConnempleoProvider Provider');
  }

  obtDatos(){
    let datos = { tipo:'C'}
    
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
   let url = 'http://www.fulp.es/test_apprestempleo.php';
   return new Promise(resolve => {
    this.http.post(url,JSON.stringify(datos),options)
       .subscribe(data => {
         resolve(data);
        });
   });
  }

}
