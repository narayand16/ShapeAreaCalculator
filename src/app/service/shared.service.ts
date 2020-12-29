import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dimensionsData$ = new BehaviorSubject<any>({});
  dimensions= {};

  getDimensionsData(): Observable<any> {
    return this.dimensionsData$.asObservable();
  }

  setDimensionsData(value) {
    this.dimensionsData$.next(value);
  }

  constructor() { }
}
