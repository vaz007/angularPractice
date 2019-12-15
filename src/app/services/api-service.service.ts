import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {

  myMethod$ : Observable<any>;
  private myMethodSubject = new Subject<any>()

   baseUrl = 'https://www.boredapi.com/api/activity';

  constructor(private httpClient: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable() 
  
   }
   myMethodData;
   myMethod(data){
    console.log("API SERVICE DATA",data);
    this.myMethodSubject.next(data);
    this.myMethodData = data

    console.log("My method data ",`${this.baseUrl, this.myMethodData.activityName}`)
    console.log(`${this.baseUrl}?${this.myMethodData.type}'?'${this.myMethodData.activityName} `)
   }

   getBoredApi() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl,{
      params : {
        type : this.myMethodData.activityName,
        minPrice : this.myMethodData.minPrice,
        maxPrice : this.myMethodData.maxPrice
      }
    })

 }
 
}
