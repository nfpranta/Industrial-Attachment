import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css'],
})
export class MycartComponent implements OnInit {
  fromMyCart: boolean;
  myCartList: any;
  progressBar: boolean  = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.fromMyCart = true;
    this.api.getProduct().subscribe({
      next: (res) => {
        this.myCartList = res;
        this.progressBar = false;
      },
      error: (err) => {
        alert('Error in retriving the data');
        this.progressBar = false;
      },
    });
  }
}
