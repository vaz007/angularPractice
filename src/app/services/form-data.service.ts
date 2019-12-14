import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import {ActivityModel} from '../models/ActivityModel'

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  
  constructor(private httpClient : HttpClient) { }

  //  url = 'http://localhost:4200/results'

  // register (userData) : Observable<ActivityModel[]> {
  //   console.log("RegisterService", userData);
  //   return this.httpClient.post<ActivityModel[]>(this.url, userData);
  // }

  sharingData = {
    activity: '',
    accessibility: '',
    type: '',
    participants: '',
    price: '',
    link: '',
    key: '',
  }

// Observable string source
  private dataStringSource = new BehaviorSubject<string>('');
  dataToString = this.dataStringSource.asObservable();
  public saveData(value){
    console.log("save data function called ", this.sharingData.activity);
    this.sharingData.activity = value;
    this.dataStringSource.next(this.sharingData.type);
  }

}
