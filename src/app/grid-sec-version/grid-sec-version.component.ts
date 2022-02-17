import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, ValueCache } from 'ag-grid-community';

@Component({
  selector: 'app-grid-sec-version',
  templateUrl: './grid-sec-version.component.html',
  styleUrls: ['./grid-sec-version.component.scss']
})
export class GridSecVersionComponent implements OnInit {

  ngOnInit(): void {
  }

  columnDefs: (ColDef | ColGroupDef)[] = [
    {headerName: "#", field: "id", type: 'numberColumn'},
    {headerName: "Nazwa", field: "name", pinned: 'left', lockPinned: true},
    {headerName: "Nazwa Fiskalna", field: "fiscalName"},
    {headerName: "Jednostka Postawowa", field: "baseUnit"},
    {headerName: "Kat. Sprz.", field: "saleCategory"},
    {headerName: "Dept. Sprz.", field: "category"},
    {headerName: "Vat Sprz.", field: "vat", type: 'numberColumn', valueFormatter: 'value.toLocaleString() + " %"'},
    {headerName: "Cennik Podstawowy", field: "price", type: 'numberColumn', valueFormatter: 'value.toLocaleString() + " zł"'}
  ]

  rowData: any[] = [
    {id: 482, name: "SNIADANIE NA LATO", fiscalName: "SNIADANIE NA LATO", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"25"},
    {id: 483, name: "SNIADANIE ANGIELSKIE", fiscalName: "SNIADANIE ANGIELSKIE", baseUnit: "porcja", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"21"},
    {id: 480, name: "OWSIANKA", fiscalName: "OWSIANKA", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"11"},
    {id: 481, name: "JAJKA ROYAL", fiscalName: "JAJKA ROYAL", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"23"},
    {id: 478, name: "KANAPKA PASTA JAJKO", fiscalName: "KANAPKA PASTA JAJKO", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"9"},
    {id: 479, name: "KANAPKA TWAROG", fiscalName: "KANAPKA TWAROG", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"9"},
    {id: 476, name: "JAJKA SADZONE", fiscalName: "JAJKA SADZONE", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"10"},
    {id: 477, name: "JAJKO 1 SZTUKA", fiscalName: "JAJKO 1 SZTUKA", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"4"},
    {id: 760, name: "DZBANEK GRAPEFRUIT", fiscalName: "DZBANEK GRAPEFRUIT", baseUnit: "porcja", saleCategory: "Soki", category: "Napoje 23%", vat:"8", price:"25"},
    {id: 761, name: "DZBANEK SOK JABLKO", fiscalName: "DZBANEK SOK JABLKO", baseUnit: "porcja", saleCategory: "Soki", category: "Napoje 8%", vat:"8", price:"25"}
  ]

  defaultColDef = {
    sortable: true,
    filter: true,
    width: 200,
    floatingFilter: true,
    resizable: true,
  }

  public columnTypes: {[key: string]: ColDef;} = {
    numberColumn: {width: 120}
  }

  gridOptions = {
    pagination: true,
    paginationPageSize: 5,
    headerHeight: 60,
    animateRows: true,
  }

  //tak samo jest cellStyle. Można podobnie dorobić klasy
  rowStyle = {
    // backgroundColor: '#7673AE',
    // color: 'white',
  }
}
