import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private myHttp: HttpClient
  ) { }

  
  // add(a: number, b: number): number{
  //   return a+b;
  // }

  getQuotes(): Observable <any> {
    return this.myHttp.get<any>('https://api.gameofthronesquotes.xyz/v1/random/5');
  }

  // getMoviesByPage(pageNo: number): Observable <any> {
  //   return this.myHttp.get<any>('https://api.gameofthronesquotes.xyz/v1/random/5&page='+pageNo);
  // }

}
//My API::  https://api.gameofthronesquotes.xyz/v1/random/5