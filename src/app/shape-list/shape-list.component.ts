import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShapeType } from '../models/shape-type.model';

@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss']
})
export class ShapeListComponent implements OnInit {

  itemList: ShapeType[] = [];
  isInputShow = false;
  selectedShape = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params) {
        this.itemList.push({ name: params.inputShape, value: params.inputShape });
      }
      else {
        console.log('params null');
      }
    });
    this.itemList.push({ name: 'Circle', value: 'circle' },
      { name: 'Rectangle', value: 'rectangle' },
      { name: 'Square', value: 'square' });
  }

  onItemSelected(item): void {
    console.log('selcted item', item);
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
