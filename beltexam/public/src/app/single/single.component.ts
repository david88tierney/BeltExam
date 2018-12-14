import { Component, OnInit } from '@angular/core';
import { RestarauntService } from '../restaraunt.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  restaraunt: any;

  constructor(private _rtservice: RestarauntService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getRestaraunt(params['id']);
    });
  }
  getRestaraunt(id){
    let observable = this._rtservice.getOne(id);
    observable.subscribe( data => {
      this.restaraunt = data['restaraunt'];
    });
  }
}
