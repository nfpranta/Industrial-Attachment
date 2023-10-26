import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ControlInterface } from '../control-interface';
import { CrudInterface } from '../crud-interface';
import { DialogComponent } from '../dialog/dialog.component';
import { ReusableTableServiceService } from '../reusable-table-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DialogComponent],
})
export class TableComponent implements OnInit {
  @Input() stopProgressBarInTable: any;
  @Input() apiObjForService: CrudInterface = {
    create: '',
    read: '',
    update: '',
    delete: '',
    readInChunk: '',
  };
  @Input() controlObjForService: ControlInterface = {
    pageSize: [],
    sorting: false,
    filter: false,
    columns: [],
    actions: true,
  };
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private api: ReusableTableServiceService,
    private router: Router
  ) {}

  length: number;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: any;

  onPaginateChange(event: any) {
    console.log('length' + event.length);
    console.log('pageSize' + event.pageSize);
    console.log('pageIndex' + event.pageIndex);
    console.log('pageSizeOption' + event.pageSizeOptions);
    this.getAllProducts();
  }
  ngOnInit(): void {
    this.api.setApiDyno(this.apiObjForService);
    this.displayedColumns = this.controlObjForService.columns;
    // try with getProductInChunk as well
    // this.getAllProducts();
    this.getProductsInChunk();
  }

  getAllProducts() {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.stopProgressBarInTable(false);
      },
      error: (err) => {
        alert('Error while fetching the records');
        this.stopProgressBarInTable(false);
      },
    });
  }

  getProductsInChunk() {
    this.api.getProductInChunk(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.stopProgressBarInTable(false);
      },
      error: (err) => {
        alert('Error while fetching the records');
        this.stopProgressBarInTable(false);
      },
    });
  }

  editProduct(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'updated') {
          this.getAllProducts();
        }
      });
  }

  deleteProduct(_id: number) {
    // console.log(_id);
    this.api.deleteProduct(_id).subscribe({
      next: (res) => {
        alert('deleted Successfully');
        this.getAllProducts();
      },
      error: (err) => {
        alert('Error while deleting the record');
      },
    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
