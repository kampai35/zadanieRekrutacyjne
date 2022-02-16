import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSlickgridModule, SortService } from 'angular-slickgrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

//@dynamic
@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    AngularSlickgridModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
