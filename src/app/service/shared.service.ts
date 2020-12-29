import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dimensionsData$ = new Subject();

  getDimensionsData() {
    return this.dimensionsData$.asObservable();
  }

  setDimensionsData(value) {
    this.dimensionsData$.next(value);
  }

  constructor() { }
}
