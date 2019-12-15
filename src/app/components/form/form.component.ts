import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ApiServiceService} from '../../services/api-service.service'

import {  Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // subscriptionForm: FormGroup;

  @Output() exampleOtput = new EventEmitter<[]>()

  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private apiService : ApiServiceService
    ) {
    this.subscriptionForm = fb.group({
      activityName: 'education',
      minPrice: '',
      maxPrice: ''

    });
  }
  ngOnInit() {
  
  }
  data : Array<any>;
  OnSubmit() {
    this.data = this.subscriptionForm.value;

    console.log(this.subscriptionForm.value);
    this.exampleOtput.emit(this.subscriptionForm.value);
    return ( this.apiService.myMethod(this.data), this.router.navigate(['/results'],{
      relativeTo: this.activatedRoute,
      queryParams: {
        type : this.subscriptionForm.value.activityName,
        minPrice : this.subscriptionForm.value.minPrice,
        maxPrice : this.subscriptionForm.value.maxPrice
      }
    }) ) ;
  }

  
  
   
}
