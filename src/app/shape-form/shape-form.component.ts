import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from "../service/shared.service";
@Component({
  selector: 'app-shape-form',
  templateUrl: './shape-form.component.html',
  styleUrls: ['./shape-form.component.scss']
})
export class ShapeFormComponent implements OnInit {

  shapeForm: FormGroup;
  dimensionsForm: FormGroup;
  selectedShape = '';
  noOfDimensions = 0;
  arr = Array; //Array type captured in a variable
  arrayItems = [];

  constructor(private fb: FormBuilder, private router: Router,
    private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.shapeForm = this.fb.group({
      shapeName: ['', [Validators.required, Validators.minLength(3)]],
      dimensions: '',
      areaFun: ''
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedShape = params && params.selectedShape ? params.selectedShape : '';
      this.noOfDimensions = params && params.noOfDimensions ? Number(params.noOfDimensions) : 0;
      this.arrayItems = this.arr(this.noOfDimensions).fill("");
      this.dimensionsForm = this.fb.group({
        width: [''],
        height: [''],
        diameter: [''],
        dimensionArray: this.fb.array([...this.arrayItems])
      });
    });

  }

  onShapeAdd(shapeInfo): void {
    this.noOfDimensions = shapeInfo.dimensions.split(',').length;
    this.router.navigate(['/list'], {
      queryParams: {
        inputShape: shapeInfo.shapeName ? shapeInfo.shapeName : '',
        noOfDimensions: this.noOfDimensions
      }
    });
  }

  saveDimensions(dimensions) { //send dimensions
    this.sharedService.setDimensionsData(dimensions);
    localStorage.setItem('dimensions', JSON.stringify(dimensions));
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
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 44) {
      return false;
    }
    return true;
  }

}
