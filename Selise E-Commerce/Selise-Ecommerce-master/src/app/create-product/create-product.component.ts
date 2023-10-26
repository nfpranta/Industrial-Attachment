import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.dialog
      .open(DialogComponent, {
        width: '80%',
      })
      .afterClosed()
      .subscribe(() => {
        this.location.back();
      });
  }
}
