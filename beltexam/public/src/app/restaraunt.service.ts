import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestarauntService {

  constructor(private _http: HttpClient) { }


  getRestaraunts() {
    return this._http.get('/restaraunts');
  }
  createRestaraunt(restaraunt) {
    return this._http.post('/restaraunt', restaraunt);
  }

  getOne(id) {
    return this._http.get(`/restaraunt/${id}`);
  }

  addReview(id, newreview) {
    return this._http.post(`/restaraunt/${id}/review`, newreview);
  }

  updateOne(id, restaraunt) {
    return this._http.put(`/restaraunt/${id}`, restaraunt);
  }

  deleteOne(id) {
    return this._http.delete(`/restaraunt/${id}`);
  }



}
