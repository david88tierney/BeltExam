import { Component, OnInit } from '@angular/core';
import { RestarauntService } from '../restaraunt.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  restaraunt = {};
  errors = {};

  constructor(private _rtService:  RestarauntService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getRestaraunt(params['id']);
    });
  }

  getRestaraunt(id) {
    let observable = this._rtService.getOne(id);
    observable.subscribe( data => {
      this.restaraunt = data['restaraunt']
    });
  }

  update(id) {
    let observable = this._rtService.updateOne(id, this.restaraunt);
    observable.subscribe( data => {
      if ( data['status'] == 'not ok') {
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
