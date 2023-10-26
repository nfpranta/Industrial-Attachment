import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.css'],
})
export class SmallCartComponent implements OnInit {
  @Input() cartData: any;
  constructor() {}

  ngOnInit(): void {}
}
