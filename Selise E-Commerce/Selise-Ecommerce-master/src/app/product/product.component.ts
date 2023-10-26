import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlInterface } from '../reusable-table/control-interface';
import { CrudInterface } from '../reusable-table/crud-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  apiForTable: CrudInterface = {
    create: 'http://localhost:8080/api/add-Product',
    read: 'http://localhost:8080/api/',
    update: 'http://localhost:8080/api/update-Product/',
    delete: 'http://localhost:8080/api/delete-Product/',
    readInChunk: 'http://localhost:8080/api/chunk/',
  };
  controlForTable: ControlInterface = {
    pageSize: [10, 15, 20],
    sorting: false,
    filter: false,
    columns: [
      'productName',
      'productShortCode',
      'category',
      'price',
      'count',
      'createdDate',
      'origin',
      'action',
    ],
    actions: true,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  progressBar: boolean = true;
  stopProgressBar(val: boolean) {
    this.progressBar = val;
  }
}
