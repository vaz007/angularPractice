import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BoredApiService {
  
  boredApiUrl : string  = 'https://www.boredapi.com/api/activity';
  boredApiLimit = '?_limit=5'
  constructor(private http : HttpClient) { }

  getBoredApi() : Observable<[]> {
    
    return this.http.get<[]>(`${this.boredApiUrl}${this.boredApiLimit}`);
  }
}
