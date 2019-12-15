import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component'

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'results', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
