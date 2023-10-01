import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Quote {
  sentence: string;
  character: {
    name: string;
  };
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];
  no: number = 0;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  submit(no: number) {
    this.http
      .get<Quote[]>('https://api.gameofthronesquotes.xyz/v1/random/' + this.no)
      .subscribe((data) => {
        this.quotes = data;
        console.log(data);
      });
  }
}
