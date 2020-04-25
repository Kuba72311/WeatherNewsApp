import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IrishNewsService {

  constructor(private httpClient:HttpClient) { }

  //method pull in the api using the http client
  getLatestNewsStories():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=29e52cf6cc1f4ddb90452c401e7cac57');
  }
}
