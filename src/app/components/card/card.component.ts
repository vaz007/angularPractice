import { Component, OnInit, Input} from '@angular/core';

import { ActivityModel } from '../../models/activityModel';

import {ApiServiceService} from '../../services/api-service.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
   @Input() activity : ActivityModel;

   constructor(private apiService : ApiServiceService) { }

  ngOnInit() {
  }

  private products = [];
  getBoredApi (){
    for (let i=0; i <=5; i++){
      this.apiService.getBoredApi().subscribe(activity => {
        console.log(activity)
        this.products.push(activity);
      })
    }
  }
   
}
