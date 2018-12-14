import { Component, OnInit } from '@angular/core';
import { RestarauntService } from '../restaraunt.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  restaraunt: any;
  newreview = {
    'name': '',
    'rating': 3,
    'comment': ''
  };
  errors = {};
  constructor(private _rtservice: RestarauntService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getRestaraunt(params['id']);
      console.log(this.restaraunt);
    });
  }

  getRestaraunt(id) {
    let observable = this._rtservice.getOne(id);
    observable.subscribe( data => {
      this.restaraunt = data['restaraunt'];
    });
  }


  addReview(id) {
    let observable = this._rtservice.addReview(id, this.newreview);
    observable.subscribe(data => {
      console.log(data);
      if (data['status'] === 'not ok') {
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
