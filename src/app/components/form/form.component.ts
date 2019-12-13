import { Component, OnInit } from '@angular/core';
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

  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder,
    private formDataSerivce: FormDataService,
    private router: Router) {
    this.subscriptionForm = fb.group({
      activityName: 'education',
      minPrice: '',
      maxPrice: ''

    });
  }

  ngOnInit() {
  }


  OnSubmit() {

    console.log(this.subscriptionForm.value);
    this.router.navigate(['/results'])
    return this.formDataSerivce.register(this.subscriptionForm.value).subscribe(
      res => {
        console.log('Success', res),
        this.router.navigate(['/results'])
      }), err => {
        console.log("Error", err)
      }

  }
}
