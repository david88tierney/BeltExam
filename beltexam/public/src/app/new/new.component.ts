import { Component, OnInit } from '@angular/core';
import { RestarauntService } from '../restaraunt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  restaraunt = {
    'name' : '',
    'cuisine' : ''
  };
  errors = {};

  constructor(private _rtService: RestarauntService, private _router: Router) { }

  ngOnInit() {
  }

  create(){
    let observable = this._rtService.createRestaraunt(this.restaraunt);
    observable.subscribe( data => {
      if ( data['status'] === 'not ok') {
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
