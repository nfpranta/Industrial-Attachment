import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReusableTableServiceService } from '../reusable-table-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  optionList = ['yes', 'no'];
  ActionButtonName: string = 'Save';
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ReusableTableServiceService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: [
        '',
        [Validators.required, Validators.min(3), Validators.max(50)],
      ],
      productShortCode: [
        '',
        [Validators.required, Validators.min(3), Validators.max(50)],
      ],
      category: ['', Validators.required],
      price: ['', Validators.required],
      count: ['', Validators.required],
      description: ['', [Validators.min(3), Validators.max(250)]],
      imageUrl: [''],
      isBestAchived: [''],
      createdDate: ['', Validators.required],
      origin: ['', Validators.required],
    });

    if (this.editData) {
      console.log(this.editData);
      this.ActionButtonName = 'Update';
      this.productForm.controls['productName'].setValue(
        this.editData.productName
      );
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['count'].setValue(this.editData.count);
      this.productForm.controls['productShortCode'].setValue(
        this.editData.productShortCode
      );
      this.productForm.controls['createdDate'].setValue(
        this.editData.createdDate
      );
      this.productForm.controls['origin'].setValue(this.editData.origin);
      this.productForm.controls['description'].setValue(
        this.editData.description
      );
      this.productForm.controls['imageUrl'].setValue(this.editData.imageUrl);
      this.productForm.controls['isBestAchived'].setValue(
        this.editData.isBestAchived
      );
    }
  }

  CreateOrEditProduct() {
    if (this.editData) {
      /////////////////////////////////////
      console.log(this.productForm.value);
      this.api.putProduct(this.productForm.value, this.editData._id).subscribe({
        next: (res) => {
          alert('Product updated Successfully');
          this.productForm.reset();
          this.dialogRef.close('updated');
        },
        error: (err) => {
          alert('Error while getting the record');
        },
      });
    } else {
      if (this.productForm.valid) {
        this.productForm.value.inCart = 0;
        this.api.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            alert('Product added successfully');
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            alert('Error while editing the product');
          },
        });
      }
    }
  }
}
