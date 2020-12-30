import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeFormComponent } from './shape-form/shape-form.component';
import { ShapeListComponent } from './shape-list/shape-list.component';
import { ShapeAreaComponent } from './shape-area/shape-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ShapeFormComponent,
    ShapeListComponent,
    ShapeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
