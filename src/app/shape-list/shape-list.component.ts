import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShapeType } from '../models/shape-type.model';
import { shapes } from "../mock-shapes-data";
@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss']
})
export class ShapeListComponent implements OnInit {

  itemList: ShapeType[] = shapes;
  selectedShape = '';
  noOfDimensions = 0;
  isPolygon = false;
  itemListUpdated: ShapeType[];
  tempShape: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params) {
        this.tempShape = params.inputShape ? params.inputShape : '';
        this.itemList = this.removeDuplicateShape(this.tempShape);
        this.itemList.push({ name: params.inputShape, value: '5' });
        this.noOfDimensions = params.noOfDimensions ? params.noOfDimensions : 0
      }
    });
  }

  removeDuplicateShape(shape) {
    return this.itemList.filter(item => item.name.toUpperCase() !== shape.toUpperCase());
  }

  onItemSelected(item): void {
    this.isPolygon = item.value == '5' ? true : false;
    this.selectedShape = item.name;
  }

  onClickNext() {
    this.isPolygon ? this.router.navigate([''], {
      queryParams: {
        selectedShape: this.selectedShape,
        noOfDimensions: this.noOfDimensions
      }
    }) :
      this.router.navigate([''], {
        queryParams: {
          selectedShape: this.selectedShape
        }
      });
  }

  cancel() {
    this.router.navigate(['']);
  }

}
