import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css'],
})
export class CartDialogComponent implements OnInit {
  totalPayable: number = 0;
  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public allProducts: any
  ) {}

  ngOnInit(): void {
    for (let eachProduct of this.allProducts) {
      if (eachProduct.inCart > 0) {
        this.totalPayable =
          this.totalPayable + eachProduct.inCart * eachProduct.price;
      }
    }
  }
}
