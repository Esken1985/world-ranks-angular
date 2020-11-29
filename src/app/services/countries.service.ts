import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from './../classes/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _url: string = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { }
  
  getCountries(): Observable<ICountry[]>{
    return this.http.get<ICountry[]>(this._url);
  }
}
