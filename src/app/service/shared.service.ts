import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dimensionsData = new BehaviorSubject({});

  constructor() {
  }

  getDimensionsData() {
    return this.dimensionsData.asObservable();
  }

  setDimensionsData(value) {
    this.dimensionsData.next(value);
  }

}
