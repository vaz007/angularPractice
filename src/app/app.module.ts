import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';

import { FormComponent } from './components/form/form.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiServiceService } from './services/api-service.service'

import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';


import { RouterModule, Routes } from '@angular/router'


const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'results', component: CardComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule.forRoot(
      appRoutes
    )



  ],
  providers: [
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private apiService: ApiServiceService) { }

  getBoredApi() {
    console.log(this.apiService.getBoredApi);
  }
}
