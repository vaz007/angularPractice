import { Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {ApiServiceService} from '../../services/api-service.service'
import {FormDataService} from '../../services/form-data.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

 //  @Input() activity : ActivityModel;
  //  @Input() subscriptionForm  : FormComponent;

   // @ViewChild(FormComponent, ) child;

   item : any[]
   myActivity: any;

   constructor(private apiService : ApiServiceService,
                private formService : FormDataService,
                private router : Router
    ) {

      
      this.formService.dataToString.subscribe(
        data => {
          console.log("Reciving data fro form Service", data);
        }
      )
    

     }
     
   products = [] 

   
  ngOnInit() {

 //   console.log(this.formService.register);
      // this.route.paramMap.subscribe(params => {
      //   console.log(params)
      // })
     //  console.log("SUB", this.subscriptionForm);

        for (let i=0; i <=5; i++){
          this.apiService.getBoredApi().subscribe(activity => {
            console.log(activity)

            this.products.push(activity);

          })
        console.log(this.products);


        }
      

     }
    //  message:string;
    //  ngAfterViewInit() {
    //   this.message = this.child.message
    //     }

    



   
}
