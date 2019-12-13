import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  
  constructor(private httpClient : HttpClient) { }

  url = 'http://localhost:4200/results'

  register (userData) : Observable<any[]> {
    console.log("RegisterService", userData);
    return this.httpClient.post<any>(this.url, userData);
  }

}
