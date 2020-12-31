import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dimensionsData = new BehaviorSubject<any>({});

  constructor() {
  }

  getDimensionsData() {
    return this.dimensionsData.asObservable();
  }

  setDimensionsData(value) {
    this.dimensionsData.next(value);
  }

  validateNumberInput(event): boolean { // this function allows only comma separated number input
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 44) {
      return false;
    }
    return true;
  }

}
