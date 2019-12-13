import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivityModel} from '../models/ActivityModel'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {
   baseUrl = 'https://www.boredapi.com/api/activity';
   private activites = [];

  constructor(private httpClient: HttpClient) { }

  getBoredApi() : Observable<ActivityModel[]>{
    return this.httpClient.get<ActivityModel[]>(`${this.baseUrl}`)

 }
}
