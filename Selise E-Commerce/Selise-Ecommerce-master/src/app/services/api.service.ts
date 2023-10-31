import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(
      'https://selise-nfpranta-backend.onrender.com/api/add-Product',
      data
    );
  }

  getProduct() {
    return this.http.get<any>(
      'https://selise-nfpranta-backend.onrender.com/api'
    );
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(
      'https://selise-nfpranta-backend.onrender.com/api/update-Product/' + id,
      data
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(
      'https://selise-nfpranta-backend.onrender.com/api/delete-Product/' + id
    );
  }
}
