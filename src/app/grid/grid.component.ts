import { Component, OnInit } from '@angular/core';
import {
  AngularGridInstance,
  Column,
  FieldType,
  Filters,
  Formatters,
  GridOption,
} from 'angular-slickgrid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  angularGrid!: AngularGridInstance;
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  frozenColumnCount = 1;

  dataset: any[] = [
    {id: 482, name: "SNIADANIE NA LATO", fiscalName: "SNIADANIE NA LATO", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"25"},
    {id: 483, name: "SNIADANIE ANGIELSKIE", fiscalName: "SNIADANIE ANGIELSKIE", baseUnit: "porcja", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"21"},
    {id: 480, name: "OWSIANKA", fiscalName: "OWSIANKA", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"11"},
    {id: 481, name: "JAJKA ROYAL", fiscalName: "JAJKA ROYAL", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"23"},
    {id: 478, name: "KANAPKA PASTA JAJKO", fiscalName: "KANAPKA PASTA JAJKO", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"9"},
    {id: 479, name: "KANAPKA TWAROG", fiscalName: "KANAPKA TWAROG", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"9"},
    {id: 476, name: "JAJKA SADZONE", fiscalName: "JAJKA SADZONE", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"10"},
    {id: 477, name: "JAJKO 1 SZTUKA", fiscalName: "JAJKO 1 SZTUKA", baseUnit: "szt.", saleCategory: "Śniadania", category: "Jedzenie", vat:"8", price:"4"},
    {id: 760, name: "DZBANEK GRAPEFRUIT", fiscalName: "DZBANEK GRAPEFRUIT", baseUnit: "porcja", saleCategory: "Soki", category: "Napoje 23%", vat:"8", price:"25"},
    {id: 761, name: "DZBANEK SOK JABLKO", fiscalName: "DZBANEK SOK JABLKO", baseUnit: "porcja", saleCategory: "Soki", category: "Napoje 8%", vat:"8", price:"25"},
  ];

  ngOnInit(): void {
    let formatterCustomCurrency = (row: any, cell: any, value: any)=> {
      return value + " zł";
    }
    this.columnDefinitions = [
      {
        id: 'id', name: '#', field: 'id', sortable: true,
        type: FieldType.string, filterable: true, filter: { model: Filters.compoundInputText }
      },
      {
        id: 'name', name: 'Nazwa', field: 'name', sortable: true,
        type: FieldType.string, filterable: true, filter: { model: Filters.compoundInputText }
      },
      {
        id: 'fiscalName', name: 'Nazwa Fiskalna', field: 'fiscalName', sortable: true,
        type: FieldType.string, filterable: true, filter: { model: Filters.compoundInputText }
      },
      {
        id: 'baseUnit', name: 'Jednostka Podstawowa', field: 'baseUnit', sortable: true,
        type: FieldType.string, filterable: true, filter: { model: Filters.compoundInputText }
      },
      {
        id: 'saleCategory', name: 'Kat. Sprz.', field: 'saleCategory', sortable: true,
        type: FieldType.string, filterable: true, filter: { model: Filters.compoundInputText }
      },
      {
        id: 'category', name: 'Dept. Sprz.', field: 'category', sortable: true,
        type: FieldType.string, filterable: true, filter: { model: Filters.compoundInputText }
      },
      {
        id: 'vat', name: 'Vat Sprz.', field: 'vat', sortable: true, formatter: Formatters.percentSymbol,
        type: FieldType.number, filterable: true, filter: { model: Filters.compoundInputNumber }
      },
      {
        id: 'price', name: 'Cennik Podstawowy', field: 'price', formatter: formatterCustomCurrency, sortable: true,
        type: FieldType.float, filterable: true, filter: { model: Filters.compoundInputNumber }
      },
    ];

    this.gridOptions = {
      enableAutoResize: true,
      enableCellNavigation: true,
      enableSorting: true,
      enableFiltering: true,
      enablePagination: true,
        pagination: {
          pageSizes: [5, 10, 20, 25, 50],
          pageSize: 5
        },
      frozenColumn: this.frozenColumnCount,
    }

    this.dataset;
  };
}
