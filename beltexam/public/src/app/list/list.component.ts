import { Component, OnInit } from '@angular/core';
import { RestarauntService } from '../restaraunt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  restaraunts = [];
  restaraunt = [];

  constructor(private _rtservice: RestarauntService, private _router: Router) { }

  ngOnInit() {
    this.getAllRestaraunts();
  }
  getAllRestaraunts(){
    let observable = this._rtservice.getRestaraunts();
    observable.subscribe( data => {
      this.restaraunts = data['restaraunts'];
    });
  }

  delete(id){
    let observable = this._rtservice.deleteOne(id);
    observable.subscribe( data => {
        this.getAllRestaraunts();
        this._router.navigate(['/']);
    });
  }
}
