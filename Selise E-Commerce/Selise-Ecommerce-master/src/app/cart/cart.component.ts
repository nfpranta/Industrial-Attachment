import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() fromMyCart: boolean = false;
  @Input() cartData: any;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.fromMyCart);
  }
  // Check if the current route is /dashboard
  isDashboardRoute(): boolean {
    return this.router.url === '/dashboard';
  }
  addToCart() {
    if (this.cartData.count > 0) {
      this.cartData.count--;
      this.cartData.inCart++;
      // make the api call
      this.api.putProduct(this.cartData, this.cartData._id).subscribe({
        next: (res) => {
          console.log('Added to cart successfully');
        },
        error: (err) => {
          alert('Error while adding to the cart');
        },
      });
    } else {
      alert('Not avaiable');
    }
  }
  incCart() {
    this.addToCart();
  }
  decCart() {
    if (this.cartData.inCart > 0) {
      this.cartData.inCart--;
      this.cartData.count++;
      this.api.putProduct(this.cartData, this.cartData._id).subscribe({
        next: (res) => {},
        error: (err) => {},
      });
    }
  }
}
