import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:8080/api/add-Product', data);
  }

  getProduct() {
    return this.http.get<any>('http://localhost:8080/api');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(
      'http://localhost:8080/api/update-Product/' + id,
      data
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(
      'http://localhost:8080/api/delete-Product/' + id
    );
  }
}
