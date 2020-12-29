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
    this.router.navigate(['/area'], {
      queryParams: {
        dimenesions: dimensions
      }
    })
  }

  goToShapeList() {
    this.router.navigateByUrl('/list');
  }

}
