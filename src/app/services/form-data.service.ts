import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import {ActivityModel} from '../models/ActivityModel'

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  
   myMethod$ : Observable<any>;
  private myMethodSubject = new Subject<any>()

  constructor(private httpClient : HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable() 
   }

  //  url = 'http://localhost:4200/results'

  // register (userData) : Observable<ActivityModel[]> {
  //   console.log("RegisterService", userData);
  //   return this.httpClient.post<ActivityModel[]>(this.url, userData);
  // }

  
   myMethod(data){
    console.log(data);
    this.myMethodSubject.next(data);
    
   }

  
}
