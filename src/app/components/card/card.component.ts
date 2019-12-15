import { Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {ApiServiceService} from '../../services/api-service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {


  public data :Array<any>;
    
   constructor(private apiService : ApiServiceService,
                private router : Router
    ) {

      this.apiService.myMethod$.subscribe((data)=> {
        console.log("Card Component ", data);
        this.data = data
      })   
       
    

     }
     
   products = [] 

   
  ngOnInit() {


        for (let i=0; i <=5; i++){
          this.apiService.getBoredApi().subscribe(activity => {
            console.log(activity)

            this.products.push(activity);

          })
        console.log(this.products);


        }
      

     }
    

    



   
}
