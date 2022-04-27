import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) { }

  getTransactionList(): Observable<any> {
    const url = `https://api.bscscan.com/api`;

    const params = new HttpParams().appendAll({
      module: 'token',
      action: 'tokeninfo',
      contractaddress: '0xDc56ed4117C7d1350e9c7164220f6342F85BEA95',
      apikey: 'FHBYKH5JENZRWH2SMIW91Q6Q83AZ6KP1KZ'
    });

    return this.http.get<any>(url, { params });
  }
}
