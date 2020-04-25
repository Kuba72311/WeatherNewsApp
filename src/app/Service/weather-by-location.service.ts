import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherByLocationService {
 
  constructor(private httpClient:HttpClient) { }

  //method pull in the api using the http client
  GetWeather():Observable<any>{
    return this.httpClient.get('http://api.weatherapi.com/v1/current.json?key=a8c092db961849b19bf204450202504&q=Galway');
  }
 
}
  
