import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cartList: any;

  constructor(private api: ApiService) {}
  progressBar : boolean = true;
  ngOnInit(): void {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.cartList = res;
        this.progressBar = false;
      },
      error: (err) => {
        this.progressBar = false;
        alert('Error while getting all the carts');
      },
    });
  }
}
