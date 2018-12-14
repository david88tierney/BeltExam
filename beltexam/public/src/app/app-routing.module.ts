import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { SingleComponent } from './single/single.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'newrestaraunt', component: NewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'restaraunt/:id', component: SingleComponent},
  { path: 'review/:id', component: ReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
