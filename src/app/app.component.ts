import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zadanieRekrutacyjne';


  columnDefs = [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ]

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 3500},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Proche', model: 'Boxter', price: 72000}
  ]
}
