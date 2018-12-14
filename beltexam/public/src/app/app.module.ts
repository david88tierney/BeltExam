import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { SingleComponent } from './single/single.component';

import {RestarauntService} from './restaraunt.service';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    NewComponent,
    SingleComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestarauntService],
  bootstrap: [AppComponent]
})
export class AppModule { }
