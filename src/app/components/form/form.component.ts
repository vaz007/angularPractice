import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityModel } from 'src/app/models/activityModel';
import { FormDataService } from '../../services/form-data.service'

import { ActivatedRoute, Router } from '@angular/router'

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
    private formDataSerivce: FormDataService,
    private router: Router,
    private formService : FormDataService,
    ) {
    this.subscriptionForm = fb.group({
      activityName: 'education',
      minPrice: '',
      maxPrice: ''

    });
  }
  message = 'Hola Mundo!';
  
  ngOnInit() {
  
  }
  data : Array<any>;
  OnSubmit() {
    this.data = this.subscriptionForm.value;

    console.log(this.subscriptionForm.value);
    this.exampleOtput.emit(this.subscriptionForm.value);
    return ( this.formDataSerivce.myMethod(this.data), this.router.navigate(['/results']) ) ;
  }

  
  
   
}
