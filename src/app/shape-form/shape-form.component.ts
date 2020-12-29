import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from "../service/shared.service";
@Component({
  selector: 'app-shape-form',
  templateUrl: './shape-form.component.html',
  styleUrls: ['./shape-form.component.scss']
})
export class ShapeFormComponent implements OnInit {

  shapeForm: FormGroup;
  dimesionsForm: FormGroup;
  selectedShape = '';

  constructor(private fb: FormBuilder, private router: Router,
    private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedShape = params && params.selectedShape ? params.selectedShape : '';
      this.dimesionsForm = this.fb.group({
        width: [''],
        height: [''],
        diameter: [''],
        side: ['']
      });
    });
    this.shapeForm = this.fb.group({
      shapeName: '',
      dimensions: '',
      areaFun: ''
    });
  }

  onShapeAdd(): void {
    console.log('insert', this.shapeForm.value);
    this.router.navigate(['/list'], {
      queryParams: {
        inputShape: this.shapeForm.controls.shapeName.value ? this.shapeForm.controls.shapeName.value : ''
      }
    });
  }

  saveDimensions(dimensions) {
    //send dimensions
    console.log('dimenesions', dimensions);
    this.sharedService.setDimensionsData(dimensions);
    this.sharedService.dimensions = dimensions;
    this.router.navigate(['/area'],
    {
      queryParams: {
        selectedShape: this.selectedShape
      }
    }
    )
  }

  goToShapeList() {
    this.router.navigateByUrl('/list');
  }

  validateNumberInput(event) { // this function allows only comma separated number input
    console.log(event);
    const charCode = event.which ? event.which : event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 44) {
      return false;
    }
    return true;
  }

}
