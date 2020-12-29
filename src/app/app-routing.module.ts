import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShapeAreaComponent } from './shape-area/shape-area.component';
import { ShapeFormComponent } from './shape-form/shape-form.component';
import { ShapeListComponent } from './shape-list/shape-list.component';

const routes: Routes = [
  { path: 'create', component: ShapeFormComponent },
  { path: 'list', component: ShapeListComponent },
  { path: 'area', component: ShapeAreaComponent },
  { path: '', component: ShapeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
