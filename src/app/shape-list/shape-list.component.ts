import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShapeType } from '../models/shape-type.model';
import { shapes } from "../mock-shapes-data";
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss']
})
export class ShapeListComponent implements OnInit {

  itemList: ShapeType[] = shapes;
  isInputShow = false;
  selectedShape = '';
  itemListUpdated: ShapeType[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params) {
        // this.itemList = this.removeDuplicateShape(params.inputShape);
        this.itemList.push({ name: params.inputShape, value: '5' });
      }
      else {
        console.log('params null');
      }
    });
    // this.itemList.push({ name: 'Circle', value: 'circle' },
    //   { name: 'Rectangle', value: 'rectangle' },
    //   { name: 'Square', value: 'square' });
  }

  // removeDuplicateShape(shape) {
  //   // this.itemList.includes(shape.name)
  //   this.itemListUpdated = this.itemList.filter(item => item.name.toUpperCase() !== shape.name.toUpperCase());
  //   return [... new Set(this.itemListUpdated)];
  // }

  onItemSelected(item): void {
    console.log('selected item', item);
    this.selectedShape = item.name;
    // this.isInputShow = true;
  }

  onClickNext() { 
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
