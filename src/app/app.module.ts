import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSlickgridModule } from 'angular-slickgrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    InfoComponent,
  ],
  imports: [
    AngularSlickgridModule.forRoot(),
    AgGridModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
