import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-shape-area',
  templateUrl: './shape-area.component.html',
  styleUrls: ['./shape-area.component.scss']
})
export class ShapeAreaComponent implements OnInit {
  dimensions: any;
  selectedShape = '';
  area = 0;

  constructor(private service: SharedService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dimensions = JSON.parse(localStorage.getItem('dimensions'));
    if (!this.dimensions) {
      this.service.getDimensionsData().subscribe((data) => {
        this.dimensions = data ? data : {};
      })
    }
    this.route.queryParams.subscribe(params => {
      this.selectedShape = params ? params.selectedShape : '';
      this.area = this.calculateArea(this.selectedShape) > 0 ? this.calculateArea(this.selectedShape).toFixed(3) : 0;
    })
  }

  calculateArea(shape) {
    switch (shape) {
      case 'Circle':
        if (this.dimensions && this.dimensions.diameter > 0)
          return (Math.PI * (this.dimensions.diameter * this.dimensions.diameter)) / 4;
      case 'Rectangle':
        if (this.dimensions && this.dimensions.width > 0 && this.dimensions.height > 0)
          return (this.dimensions.width * this.dimensions.height);
      case 'Square':
        if (this.dimensions && this.dimensions.width > 0)
          return (this.dimensions.side * this.dimensions.side);
      case 'Eclipse':
        if (this.dimensions && this.dimensions.width > 0 && this.dimensions.height > 0)
          return (Math.PI * (this.dimensions.width * this.dimensions.height));
      default:
        // returning the product of given dimensions as area
        if (this.dimensions && this.dimensions.dimensionArray && this.dimensions.dimensionArray.length)
          return this.dimensions.dimensionArray.reduce((element, reducer) => element * reducer);
    }
  }

  navigateToShapeForm() {
    this.router.navigateByUrl('/create');
  }

}
