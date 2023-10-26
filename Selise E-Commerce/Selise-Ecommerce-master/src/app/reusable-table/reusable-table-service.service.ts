import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudInterface } from './crud-interface';

@Injectable({
  providedIn: 'root',
})
export class ReusableTableServiceService {
  constructor(private http: HttpClient) {}

  apiDyno: CrudInterface = {
    create: '',
    read: '',
    update: '',
    delete: '',
    readInChunk: '',
  };

  // controlDyno: ControlInterface = {
  //   pageSize: [],
  //   sorting: false,
  //   filter: false,
  //   columns: [],
  // };

  setApiDyno(obj: CrudInterface) {
    this.apiDyno = obj;
    // this.controlDyno = control;
  }

  postProduct(data: any) {
    return this.http.post<any>(this.apiDyno.create, data);
  }

  getProduct() {
    return this.http.get<any>(this.apiDyno.read);
  }

  getProductInChunk(pageIndex: number, pageSize: number) {
    return this.http.get<any>(
      this.apiDyno.readInChunk + pageIndex + '/' + pageSize
    );
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(this.apiDyno.update + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(this.apiDyno.delete + id);
  }
}
