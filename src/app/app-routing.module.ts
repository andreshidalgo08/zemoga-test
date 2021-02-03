import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {BlankComponent} from './blank/blank.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'past-trials', component: BlankComponent},
  {path: 'how-it-works', component: BlankComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
