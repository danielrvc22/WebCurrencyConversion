import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  private baseAPIURL = 'https://localhost:44375/api/CurrencyConversion/';
  private GetCurrencyConversion :string =  this.baseAPIURL + "Conversion";
  constructor(private http:HttpClient) {  }

getCurrencyConversion(from: string, to: string, amount: number): Observable<any> {
    // Crear los parámetros de consulta usando HttpParams
    console.log('url' ,  this.GetCurrencyConversion)
    const params = new HttpParams()
      .set('currencyOrigin', from)
      .set('currencyTarget', to)
      .set('amount', amount.toString());

    // Realizar la solicitud GET con los parámetros
    return this.http.get<any>(this.GetCurrencyConversion, { params });
  }
  
}
