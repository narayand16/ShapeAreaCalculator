import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private service: SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.dimensions = this.service.dimensions ? this.service.dimensions : {};
    this.service.getDimensionsData().subscribe((data) => {
      console.log('data', data);
      this.dimensions = data ? data : null;
      // this.area = this.calculateArea(this.selectedShape);
    })
    this.route.queryParams.subscribe(params => {
      this.selectedShape = params ? params.selectedShape : ''
      this.area = this.calculateArea(this.selectedShape);
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
    }
  }

}
