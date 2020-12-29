import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeAreaComponent } from './shape-area.component';

describe('ShapeAreaComponent', () => {
  let component: ShapeAreaComponent;
  let fixture: ComponentFixture<ShapeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
